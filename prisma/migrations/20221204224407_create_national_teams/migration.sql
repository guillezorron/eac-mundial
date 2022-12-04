-- CreateTable
CREATE TABLE "NationalTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "NationalTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NationalTeam_name_key" ON "NationalTeam"("name");

-- AddForeignKey
ALTER TABLE "NationalTeam" ADD CONSTRAINT "NationalTeam_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
