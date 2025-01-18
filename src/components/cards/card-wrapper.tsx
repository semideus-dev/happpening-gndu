import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CardWrapper({ children, className }: Props) {
  return (
    <div className={cn(className, "bg-white rounded-xl p-6 shadow-md h-fit")}>
      {children}
    </div>
  );
}
