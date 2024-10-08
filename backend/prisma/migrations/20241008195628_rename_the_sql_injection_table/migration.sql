/*
  Warnings:

  - You are about to drop the `userForsqlInjection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "userForsqlInjection";

-- CreateTable
CREATE TABLE "userForSQLInjection" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "userForSQLInjection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userForSQLInjection_username_key" ON "userForSQLInjection"("username");
