/*
  Warnings:

  - A unique constraint covering the columns `[captcha]` on the table `Lab1captcha` will be added. If there are existing duplicate values, this will fail.
  - Made the column `captcha` on table `Lab1captcha` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lab1captcha" ALTER COLUMN "captcha" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Lab1captcha_captcha_key" ON "Lab1captcha"("captcha");
