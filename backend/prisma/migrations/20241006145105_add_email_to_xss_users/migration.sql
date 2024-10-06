/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `userForXSS` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `userForXSS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userForXSS" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "userForXSS_email_key" ON "userForXSS"("email");
