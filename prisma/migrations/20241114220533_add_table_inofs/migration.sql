-- CreateTable
CREATE TABLE "Infos" (
    "id" TEXT NOT NULL,
    "powerOutput" INTEGER NOT NULL,
    "dailyProduction" INTEGER NOT NULL,
    "monthlyProduction" INTEGER NOT NULL,
    "annualProduction" INTEGER NOT NULL,

    CONSTRAINT "Infos_pkey" PRIMARY KEY ("id")
);
