-- CreateTable
CREATE TABLE "PowerPlants" (
    "id" TEXT NOT NULL,
    "location" TEXT,
    "production" DECIMAL(65,30),
    "dailyProduction" DECIMAL(65,30),
    "totalProduction" DECIMAL(65,30),
    "peakHours" DECIMAL(65,30),
    "climate" TEXT,
    "time" INTEGER,
    "networkStatus" TEXT,
    "typeOfPlant" TEXT,
    "typeOfSystem" TEXT,
    "capacity" DECIMAL(65,30),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PowerPlants_pkey" PRIMARY KEY ("id")
);
