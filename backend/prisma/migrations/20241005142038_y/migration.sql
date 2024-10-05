/*
  Warnings:

  - You are about to drop the column `name` on the `userForsqlInjection` table. All the data in the column will be lost.
  - Added the required column `password` to the `userForsqlInjection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userForsqlInjection" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL;
