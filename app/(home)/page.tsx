import { Navbar } from "../_components/navbar";
import {
  updatedAt,
  latestPowerOutput,
  latestDailyProduction,
  latestMonthlyProduction,
  latestAnnualProduction,
} from "../api/latest-info";
import { Cards } from "./components/cards";
import { ProductionChart } from "./components/charts";
import { format } from "date-fns-tz";

export default async function Home() {
  const timeZone = "America/Sao_Paulo";
  const formattedDate = format(new Date(updatedAt), "dd.MMMM.yyyy HH:mm:ss", { timeZone });
  return (
    <>
      <Navbar />
      <div className="p-6 flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-between md:gap-4">
        <h1 className="text-lg font-bold md:text-2xl">Dashboard</h1>
        <div className="flex items-center te">
          <p className="text-sm text-muted-foreground">
            {formattedDate}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-6 p-4">
        <Cards
          title="Usinas Online"
          value={latestPowerOutput ? Number(latestPowerOutput) : 0}
        />
        <Cards title="Produção Diaria" value={Number(latestDailyProduction)} />
        <Cards
          title="Produção Mensal"
          value={Number(latestMonthlyProduction)}
        />
        <Cards title="Produção Anual" value={Number(latestAnnualProduction)} />
      </div>
      <div className="grid grid-cols-2 p-6">
        <ProductionChart
          Mensal={Number(latestMonthlyProduction)}
          Diaria={Number(latestDailyProduction)}
          Anual={Number(latestAnnualProduction)}
        />
      </div>
    </>
  );
}
