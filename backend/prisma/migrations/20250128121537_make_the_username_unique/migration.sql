/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `apiHackingLab` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "apiHackingLab_username_key" ON "apiHackingLab"("username");
