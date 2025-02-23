/*
  Warnings:

  - A unique constraint covering the columns `[coupon]` on the table `lab2RaceCondition` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "lab2RaceCondition" ADD COLUMN     "usedAt" TIMESTAMP(3),
ALTER COLUMN "isValid" SET DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "lab2RaceCondition_coupon_key" ON "lab2RaceCondition"("coupon");
