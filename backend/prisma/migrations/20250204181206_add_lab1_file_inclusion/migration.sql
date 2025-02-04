-- CreateTable
CREATE TABLE "FileInclusionLab1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "FileInclusionLab1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FileInclusionLab1_name_key" ON "FileInclusionLab1"("name");
