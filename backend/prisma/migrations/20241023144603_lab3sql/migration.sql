-- CreateTable
CREATE TABLE "lab2sql" (
    "id" TEXT NOT NULL,
    "category" TEXT DEFAULT 'electronics',
    "released" TEXT DEFAULT '1',

    CONSTRAINT "lab2sql_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab3sql" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "price" TEXT,

    CONSTRAINT "lab3sql_pkey" PRIMARY KEY ("id")
);
