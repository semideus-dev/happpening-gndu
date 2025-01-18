import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  header: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  descriptionClassName?: string;
}

export default function PageHeader({
  header,
  description,
  className,
  headerClassName,
  descriptionClassName,
}: Props) {
  return (
    <div
      className={cn(
        className,
        "flex flex-col items-center justify-center text-center space-y-2"
      )}
    >
      <h1
        className={cn(headerClassName, "font-semibold text-5xl tracking-tight")}
      >
        {header}
      </h1>
      <span
        className={cn(descriptionClassName, "text-sm text-muted-foreground")}
      >
        {description}
      </span>
    </div>
  );
}
