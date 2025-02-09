-- CreateTable
CREATE TABLE "Lab1RaceCondition" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "tel" TEXT,

    CONSTRAINT "Lab1RaceCondition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lab1RaceCondition_email_key" ON "Lab1RaceCondition"("email");
