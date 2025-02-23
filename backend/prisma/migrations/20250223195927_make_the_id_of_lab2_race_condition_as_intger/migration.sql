/*
  Warnings:

  - The primary key for the `lab2RaceCondition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `lab2RaceCondition` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `lab2RaceConditionPrice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `lab2RaceConditionPrice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "lab2RaceCondition" DROP CONSTRAINT "lab2RaceCondition_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "lab2RaceCondition_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "lab2RaceConditionPrice" DROP CONSTRAINT "lab2RaceConditionPrice_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "lab2RaceConditionPrice_pkey" PRIMARY KEY ("id");
