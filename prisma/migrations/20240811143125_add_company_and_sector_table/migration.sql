-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT,
    "slug" TEXT NOT NULL,
    "oneLiner" TEXT NOT NULL,
    "valuation" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sectors" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "primary" BOOLEAN NOT NULL,

    CONSTRAINT "Sectors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sectors_id_key" ON "Sectors"("id");

-- AddForeignKey
ALTER TABLE "Sectors" ADD CONSTRAINT "Sectors_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
