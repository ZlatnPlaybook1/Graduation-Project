-- CreateTable
CREATE TABLE "CSRFLab3" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "CSRFLab3_pkey" PRIMARY KEY ("id")
);
