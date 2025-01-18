"use client";

import React from "react";

import CardWrapper from "@/components/cards/card-wrapper";
import StatCard from "@/components/cards/stat-card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, CalendarCheck, ChartNoAxesCombined } from "lucide-react";
import { RevenueTable } from "@/components/revenue-table";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* MAIN (BASE STATS, EARNINGS, REVENUE) */}
      <div className="col-span-2 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Stats />
        <RevenueTable />
      </div>

      {/* SIDE (BACKSTAGE, DATE & TIME, NEXT EVENT) */}
      <div className="col-span-1 grid grid-cols-1 gap-2">
        <CardWrapper className="flex flex-col space-y-4">
          <div className="space-y-1">
            <span className="font-semibold text-3xl tracking-tight">
              Backstage
            </span>
            <p className="text-muted-foreground text-sm">
              Best way to manage events, teams & client
            </p>
          </div>
          <Button effect="expandIcon" iconPlacement="right" icon={ArrowRight}>
            Learn More
          </Button>
        </CardWrapper>
        <DateTime />
      </div>
    </div>
  );
}

function Stats() {
  return (
    <>
      <StatCard
        value={7}
        icon={<CalendarCheck size={30} />}
        title="paid events this month"
      />
      <StatCard
        value={5500}
        icon={<ChartNoAxesCombined className="text-sky-400" size={30} />}
        title="total earnings this month"
        theme="text-sky-400"
      />
      <StatCard
        value={8000}
        icon={<ChartNoAxesCombined className="text-rose-400" size={30} />}
        title="tickets sold this month"
        theme="text-rose-400"
      />
    </>
  );
}

function DateTime() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const time = `${hours}:${minutes}:${seconds}`;
  return (
    <div className="flex flex-col space-y-2">
      <CardWrapper className="text-center">
        <span className="text-3xl font-semibold">{time}</span>
      </CardWrapper>
      <Calendar
        selected={date}
        onSelect={setDate}
        className="rounded-xl flex items-center justify-center text-lg bg-white shadow-md"
      />
    </div>
  );
}

