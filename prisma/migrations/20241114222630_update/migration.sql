/*
  Warnings:

  - You are about to drop the `infos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "infos";

-- CreateTable
CREATE TABLE "Infos" (
    "id" SERIAL NOT NULL,
    "power_output" DECIMAL(10,2) NOT NULL,
    "daily_production" DECIMAL(10,2) NOT NULL,
    "monthly_production" DECIMAL(10,2) NOT NULL,
    "annual_production" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Infos_pkey" PRIMARY KEY ("id")
);
