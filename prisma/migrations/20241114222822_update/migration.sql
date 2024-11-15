/*
  Warnings:

  - You are about to drop the `Infos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Infos";

-- CreateTable
CREATE TABLE "infos" (
    "id" SERIAL NOT NULL,
    "power_output" DECIMAL(10,2) NOT NULL,
    "daily_production" DECIMAL(10,2) NOT NULL,
    "monthly_production" DECIMAL(10,2) NOT NULL,
    "annual_production" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "infos_pkey" PRIMARY KEY ("id")
);
