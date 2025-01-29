-- CreateTable
CREATE TABLE "ProductToPathTraversalLa" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductToPathTraversalLa_pkey" PRIMARY KEY ("id")
);
