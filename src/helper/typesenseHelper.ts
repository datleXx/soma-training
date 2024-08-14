import { db } from "~/server/db";
import typesenseClient from "~/server/typesenseClient";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

const companySchema: CollectionCreateSchema = {
  name: "companies",
  fields: [
    { name: "id", type: "string" },
    { name: "name", type: "string" },
    { name: "logoUrl", type: "string", optional: true },
    { name: "slug", type: "string" },
    { name: "oneLiner", type: "string", optional: true },
    { name: "valuation", type: "int32", optional: true },
    { name: "region", type: "string", optional: true },
    { name: "websiteUrl", type: "string", optional: true },
    { name: "sectors", type: "string[]" },
  ],
};

async function createCollectionIfNotExists() {
  try {
    console.log("Retrieving collection... [Started]");
    await typesenseClient.collections("companies").retrieve();
    console.log("Retrieving collection... [Completed]");
  } catch (error) {
    if (error) {
      console.log("Creating collection... [Started]");
      await typesenseClient.collections().create(companySchema);
      console.log("Creating collection... [Completed]");
    } else {
      throw error;
    }
  }
}

export async function indexPrismaData() {
  console.log("Indexing Prisma data... [Started]");
  await createCollectionIfNotExists();
  console.log("TypeSense Client", typesenseClient.configuration);

  const companies = await db.company.findMany({
    include: {
      sectors: true,
    },
  });

  const documents = companies.map((company) => ({
    id: company.id,
    name: company.name,
    logoUrl: company.logoUrl,
    slug: company.slug,
    oneLiner: company.oneLiner,
    valuation: company.valuation,
    region: company.region,
    websiteUrl: company.websiteUrl,
    sectors: company.sectors.map((sector) => sector.name),
  }));

  await typesenseClient.collections("companies").documents().import(documents);
  console.log("Indexing Prisma data... [Completed]");
}
