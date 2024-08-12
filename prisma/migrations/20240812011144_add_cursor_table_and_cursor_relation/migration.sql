/*
  Warnings:

  - Added the required column `cursorId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "cursorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Cursor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Cursor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_cursorId_fkey" FOREIGN KEY ("cursorId") REFERENCES "Cursor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
