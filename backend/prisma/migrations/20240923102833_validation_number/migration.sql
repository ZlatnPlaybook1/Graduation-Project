/*
  Warnings:

  - You are about to drop the column `validated` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `validationNumberId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `ValidationNumber` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "validated",
DROP COLUMN "validationNumberId";

-- AlterTable
ALTER TABLE "ValidationNumber" DROP COLUMN "expiresAt";
