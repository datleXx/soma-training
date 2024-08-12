import { NextResponse, NextRequest } from "next/server"; // eslint-disable-line
import { db } from "~/server/db";
import {
  fetchBatch,
  decodeURL,
  CompaniesUpsert,
  type CompanyDataType,
  type BatchDataType,
} from "~/helper/companiesHelper"; // eslint-disable-line

export async function GET(req: NextRequest) {
  try {
    const baseURL =
      "https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D";
    const decodedURL = decodeURL(baseURL);
    const localStorage: BatchDataType[] = [];
    const data = await fetchBatch("", localStorage, decodedURL); // eslint-disable-line
    await CompaniesUpsert(data);
    return NextResponse.json("Fetched Companies Data Successfully"); // eslint-disable-line
  } catch (error) {
    console.log("Error", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" });
    }
  }
}
