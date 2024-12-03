/*
  Warnings:

  - You are about to drop the column `password` on the `userForXSS` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `userForXSS` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "userForXSS_username_key";

-- AlterTable
ALTER TABLE "userForXSS" DROP COLUMN "password",
DROP COLUMN "username";
