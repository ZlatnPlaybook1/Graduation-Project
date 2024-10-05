/*
  Warnings:

  - You are about to drop the column `email` on the `userForsqlInjection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `userForsqlInjection` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "userForsqlInjection_email_key";

-- AlterTable
ALTER TABLE "userForsqlInjection" DROP COLUMN "email",
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "userForsqlInjection_username_key" ON "userForsqlInjection"("username");
