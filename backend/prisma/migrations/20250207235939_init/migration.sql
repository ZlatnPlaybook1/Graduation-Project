-- CreateTable
CREATE TABLE "ClickJackLab1" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "ClickJackLab1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClickJackLab1_username_key" ON "ClickJackLab1"("username");
