-- CreateTable
CREATE TABLE "imageForApiHacking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "imageForApiHacking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "imageForApiHacking" ADD CONSTRAINT "imageForApiHacking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "apiHackingLab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
