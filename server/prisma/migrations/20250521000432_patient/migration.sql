-- CreateEnum
CREATE TYPE "PatientSpecie" AS ENUM ('SHEEP', 'CAT', 'PIG', 'COW', 'HORSE', 'DOG');

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "species" "PatientSpecie" NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
