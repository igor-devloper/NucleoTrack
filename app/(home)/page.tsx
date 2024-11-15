import { Navbar } from "../_components/navbar";
import { getDasboard } from "@/app/api/get-dasbard";
import { Cards } from "./components/cards";
import { ProductionChart } from "./components/charts";

export default async function Home() {
  const dashboard = await getDasboard();


  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', 
    timeZone: 'America/Sao_Paulo'
  }).format(new Date(dashboard.updatedAt));

  return (
    <>
      <Navbar />
      <div className="p-6 flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-between md:gap-4">
        <h1 className="text-lg font-bold md:text-2xl">Dashboard</h1>
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">
            {formattedDate}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center justify-center gap-6 p-4">
        <Cards title="Usinas Online" value={Number(dashboard.latestPowerOutput)} />
        <Cards title="Produção Diaria" value={Number(dashboard.latestDailyProduction)} />
        <Cards title="Produção Mensal" value={Number(dashboard.latestMonthlyProduction)} />
        <Cards title="Produção Anual" value={Number(dashboard.latestAnnualProduction)} />
      </div>
      <div className="grid grid-cols-2 p-6">
        <ProductionChart
          Mensal={Number(dashboard.latestPowerOutput)}
          Diaria={Number(dashboard.latestDailyProduction)}
          Anual={Number(dashboard.latestMonthlyProduction)}
        />
      </div>
    </>
  );
}
