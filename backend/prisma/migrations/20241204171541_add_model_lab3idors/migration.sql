-- CreateTable
CREATE TABLE "Lab3IDORS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 1000,

    CONSTRAINT "Lab3IDORS_pkey" PRIMARY KEY ("id")
);
