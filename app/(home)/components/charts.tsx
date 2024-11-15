"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart"

// Exemplo de dados para Produção Diária, Mensal e Anual

interface ProductionChartsProps {
  Diaria: number,
  Mensal: number,
  Anual: number
}

export function ProductionChart({Diaria, Anual, Mensal}: ProductionChartsProps) {
  const chartData = [
    { type: "daily", value: Diaria, fill: "var(--color-daily)" },
    { type: "monthly", value: Mensal, fill: "var(--color-monthly)" },
    { type: "annual", value: Anual, fill: "var(--color-annual)" },
  ]
  
  const chartConfig = {
    production: {
      label: "Produção",
    },
    daily: {
      label: "Diária",
      color: "hsl(var(--chart-1))",
    },
    monthly: {
      label: "Mensal",
      color: "hsl(var(--chart-2))",
    },
    annual: {
      label: "Anual",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gráfico de Produção</CardTitle>
        <CardDescription>Produção Diária, Mensal e Anual</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando a produção para o último mês, ano e dia.
        </div>
      </CardFooter>
    </Card>
  )
}
