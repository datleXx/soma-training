import { NextResponse, NextRequest } from "next/server";
import typesenseClient from "~/server/typesenseClient";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";

  try {
    const searchResults = await typesenseClient
      .collections("companies")
      .documents()
      .search({
        q: query,
        query_by: "name,oneLiner,region,sectors",
      });

    return NextResponse.json(searchResults.hits?.map((hit) => hit.document));
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json("An unknown error happened", { status: 500 });
  }
}
