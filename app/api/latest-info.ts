
import { db } from "@/lib/prisma";

const latestPowerOutputData = await db.infos.findMany({
  select: {
    power_output: true,
  },
  orderBy: {
    id: "desc",
  },
  take: 1,
});

export const latestPowerOutput = latestPowerOutputData[0]?.power_output ?? 0;

const latestDailyProductionData = await db.infos.findMany({
  select: {
    daily_production: true,
  },
  orderBy: {
    id: "desc",
  },
  take: 1,
});
export const latestDailyProduction =
  latestDailyProductionData[0]?.daily_production ?? 0;

const latestMonthlyProductionData = await db.infos.findMany({
  select: {
    monthly_production: true,
  },
  orderBy: {
    id: "desc",
  },
  take: 1,
});
export const latestMonthlyProduction =
  latestMonthlyProductionData[0]?.monthly_production ?? 0;

const latestAnnualProductionData = await db.infos.findMany({
  select: {
    annual_production: true,
  },
  orderBy: {
    id: "desc",
  },
  take: 1,
});
export const latestAnnualProduction =
  latestAnnualProductionData[0]?.annual_production ?? 0;
const updatedData = await db.infos.findMany({
  select: {
    updatedAt: true,
  },
  orderBy: {
    id: "desc",
  },
  take: 1,
});
export const updatedAt = updatedData[0]?.updatedAt ?? new Date();