import { cn } from "@/lib/utils";
import React from "react";
import CardWrapper from "@/components/cards/card-wrapper";

interface Props {
  value: number;
  title: string;
  icon: React.ReactNode;
  theme?: string;
}

export default function StatCard({ value, icon, title, theme }: Props) {
  return (
    <CardWrapper className="flex flex-col space-y-2 items-center">
      <div className="flex items-center justify-between text-xl w-full font-bold">
        <span className={cn(theme, "text-5xl")}>{value}</span>
        {icon}
      </div>
      <span className="w-full text-xs text-muted-foreground">{title}</span>
    </CardWrapper>
  );
}
