import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";

interface CardProps {
  title: string;
  value: number;
}

export function Cards({ title, value }: CardProps) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          <p className="smalltext-muted-foreground text-white opacity-70">
            {title}
          </p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="space-y-4 md:flex md:flex-col md:gap-2">
            <p className="font-bold small text-xl md:text-2xltext-2xl md:text-4xl">
              {value}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
