"use client";

import { useScrollReveal } from "@/hooks/UseScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium" | "long";
}

export function Reveal({ children, className, delay = "none" }: RevealProps) {
  const { ref, isIntersecting } = useScrollReveal();

  const delayClasses = {
    none: "delay-0",
    short: "delay-150",
    medium: "delay-300",
    long: "delay-500",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        delayClasses[delay],
        className,
      )}>
      {children}
    </div>
  );
}
