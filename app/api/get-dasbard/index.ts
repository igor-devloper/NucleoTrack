import { db } from '@/lib/prisma';

export async function getDasboard() {
  const latestPowerOutputData = await db.infos.findMany({
    select: { power_output: true },
    orderBy: { id: 'desc' },
    take: 1,
  });
  const latestDailyProductionData = await db.infos.findMany({
    select: { daily_production: true },
    orderBy: { id: 'desc' },
    take: 1,
  });
  const latestMonthlyProductionData = await db.infos.findMany({
    select: { monthly_production: true },
    orderBy: { id: 'desc' },
    take: 1,
  });
  const latestAnnualProductionData = await db.infos.findMany({
    select: { annual_production: true },
    orderBy: { id: 'desc' },
    take: 1,
  });
  const updatedData = await db.infos.findMany({
    select: { updatedAt: true },
    orderBy: { id: 'desc' },
    take: 1,
  });

    return {
    latestPowerOutput: latestPowerOutputData[0]?.power_output ?? 0,
    latestDailyProduction: latestDailyProductionData[0]?.daily_production ?? 0,
    latestMonthlyProduction: latestMonthlyProductionData[0]?.monthly_production ?? 0,
    latestAnnualProduction: latestAnnualProductionData[0]?.annual_production ?? 0,
    updatedAt: updatedData[0]?.updatedAt ?? new Date(),
  };

}
