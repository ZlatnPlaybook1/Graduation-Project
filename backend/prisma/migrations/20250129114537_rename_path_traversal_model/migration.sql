/*
  Warnings:

  - You are about to drop the `ProductToPathTraversalLa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductToPathTraversalLa";

-- CreateTable
CREATE TABLE "ProductToPathTraversalLab1" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductToPathTraversalLab1_pkey" PRIMARY KEY ("id")
);
