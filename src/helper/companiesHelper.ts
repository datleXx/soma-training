import { db } from "~/server/db";

export interface CompanyResponse {
  result: {
    data: {
      json: {
        results: CompanyDataType[];
        nextCursor?: string;
      };
    };
  };
}

export interface BatchDataType {
  cursor: string;
  result: CompanyDataType[];
  nextCursor: string;
}

export interface FileType {
  downloadKey: string;
}

export interface SectorType {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  companyId: string;
  primary: boolean;
}

export interface CompanyDataType {
  id: string;
  files: FileType[];
  sectors: SectorType[];
  name: string;
  logoUrl: string;
  slug: string;
  oneLiner: string;
  valuation: string;
  region: string;
  website: string;
}

export function BaseUrl(input: string): string {
  return `https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=${input}`;
}

export async function fetchFromURL(url: string): Promise<CompanyResponse[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch companies");
    }

    const data = await response.json(); // eslint-disable-line
    return data; // eslint-disable-line
  } catch (e) {
    console.log("Error", e);
    return [];
  }
}

export function decodeURL(url: string) {
  return decodeURIComponent(url);
}

export function encodeURL(url: string) {
  return encodeURIComponent(url);
}

export function decodedInput(cursor: string) {
  const input = `{"0":{"json":{"limit":30,"industry":null,"region":null,"cursor":"${cursor}"}}}`;
  return input;
}

export async function fetchBatch(
  cursor: string,
  storage: BatchDataType[],
  initialUrl?: string,
): Promise<BatchDataType[]> {
  try {
    const url = cursor ? BaseUrl(decodedInput(cursor)) : initialUrl;
    const data = await fetchFromURL(url!);
    const result: BatchDataType = {
      cursor: cursor,
      result: [],
      nextCursor: "None",
    };
    result.result.push(...(data[0]?.result?.data?.json?.results ?? []));
    result.nextCursor = data[0]?.result?.data?.json?.nextCursor ?? "None";
    result.cursor = cursor;
    storage.push(result);
    if (result.nextCursor !== "None") {
      await fetchBatch(result.nextCursor, storage);
    }
    return storage;
  } catch (e) {
    console.log("Error", e);
    return [];
  }
}

export async function CompaniesUpsert(batches: BatchDataType[]) {
  for (const batch of batches) {
    try {
      //Usert cursor i.e. the id of the fetched batch
      await db.cursor.upsert({
        update: {
          nextCursor: batch.nextCursor ?? "undefined",
        },
        create: {
          id: batch.cursor ?? "undefined",
          nextCursor: batch.nextCursor ?? "undefined",
        },
        where: { id: batch.cursor ?? "undefined" },
      });
      //Upsert companies
      for (const company of batch.result) {
        await db.company.upsert({
          update: {
            name: company.name,
            logoUrl: company.logoUrl,
            slug: company.slug,
            oneLiner: company.oneLiner,
            valuation: company.valuation,
            region: company.region ? company.region : "N/A",
            websiteUrl: company.website,
            cursorId: batch.cursor ?? "undefined",
          },
          create: {
            id: company.id,
            name: company.name,
            logoUrl: company.logoUrl,
            slug: company.slug,
            oneLiner: company.oneLiner,
            valuation: company.valuation,
            region: company.region ? company.region : "N/A",
            websiteUrl: company.website,
            cursorId: batch.cursor ?? "undefined",
          },
          where: {
            id: company.id,
          },
        });
        // Upsert sectors related to the company
        if (company.sectors && company.sectors.length > 0) {
          for (const sector of company.sectors) {
            await db.sectors.upsert({
              update: {
                name: sector.name,
                primary: sector.primary,
                companyId: sector.companyId,
              },
              create: {
                id: sector.id,
                name: sector.name,
                primary: sector.primary,
                companyId: sector.companyId,
              },
              where: { id: sector.id },
            });
          }
        }
      }
    } catch (e) {
      console.log("Error", e);
    }
  }
}
