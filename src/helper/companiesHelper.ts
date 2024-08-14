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
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  name: string;
  companyId: string;
  primary: boolean;
}

export interface CompanyDataType {
  id: string;
  files?: FileType[];
  sectors: SectorType[];
  name: string;
  logoUrl: string | null;
  slug: string;
  oneLiner: string | null;
  valuation: string | null;
  region: string | null;
  website?: string;
}

export interface CompaniesInfiniteQueryResponse { //use for the infinite query
  id?: string;
  sectors?: string[];
  name?: string;
  logoUrl?: string;
  slug?: string;
  oneLiner?: string;
  valuation?: number;
  region?: string;
  websiteUrl?: string;
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

export function getValuationOrder(valuation: string): number {
    const valuationOrder: {[key: string]: number} = {
        "all": 0,
        "+5b": 1, 
        "1-5b": 2,
        "500m-1b": 3,
        "100-500m": 4,
        "50-100m": 5,
        "<50m": 6,
        "N/A": 7,
    }
    return valuationOrder[valuation] ?? 7;
}

export function getValuation(order: number): string {
    const valuationOrder: {[key: number]: string} = {
        0: "all",
        1: "+5b",
        2: "1-5b",
        3: "500m-1b",
        4: "100-500m",
        5: "50-100m",
        6: "<50m",
        7: "N/A",
    }
    return valuationOrder[order] ?? "N/A";
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
            oneLiner: company.oneLiner ?? "N/A",
            valuation: company.valuation ? getValuationOrder(company.valuation) : 7,
            region: company.region ? company.region : "N/A",
            websiteUrl: company.website,
            cursorId: batch.cursor ?? "undefined",
          },
          create: {
            id: company.id,
            name: company.name,
            logoUrl: company.logoUrl,
            slug: company.slug,
            oneLiner: company.oneLiner ?? "N/A",
            valuation: company.valuation ? getValuationOrder(company.valuation) : 7,
            region: company.region ? company.region : "N/A",
            websiteUrl: company.website ?? "N/A",
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
