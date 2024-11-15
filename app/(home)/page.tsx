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

export default async function Home() {
  const formatoData = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(updatedAt);
  return (
    <>
      <Navbar />
      <div className="p-6 flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-between md:gap-4">
        <h1 className="text-lg font-bold md:text-2xl">Dashboard</h1>
        <div className="flex items-center te">
          <p className="text-sm text-muted-foreground">
            {formatoData}
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
