-- DropForeignKey
ALTER TABLE "Sectors" DROP CONSTRAINT "Sectors_companyId_fkey";

-- AddForeignKey
ALTER TABLE "Sectors" ADD CONSTRAINT "Sectors_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
