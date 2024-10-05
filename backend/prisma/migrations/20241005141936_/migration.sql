/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "userForsqlInjection" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "userForsqlInjection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userForsqlInjection_email_key" ON "userForsqlInjection"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
