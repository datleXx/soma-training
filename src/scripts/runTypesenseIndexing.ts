import { indexPrismaData } from "~/helper/typesenseHelper";

const runTypesenseIndexing = async () => {
  try {
    await indexPrismaData();
  } catch (error) {
    console.log("Error", error);
  }
};

runTypesenseIndexing();
