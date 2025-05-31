-- CreateEnum
CREATE TYPE "ConsType" AS ENUM ('FIRST', 'VACINATION', 'RETURN', 'CHECKUP');

-- CreateTable
CREATE TABLE "Consultation" (
    "id" SERIAL NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "type" "ConsType" NOT NULL,
    "description" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
