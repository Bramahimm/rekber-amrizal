"use client";

import { useEffect, useState } from "react";

interface Spark {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
}

export function SparksBackground() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const generateSparks = () => {
      return Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 2,
      }));
    };

    // Menghindari cascading render dengan menunda state update secara asinkron
    const timer = setTimeout(() => {
      setSparks(generateSparks());
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute bottom-0 rounded-full bg-yellow-500 blur-[1px] animate-sparks mix-blend-screen"
          style={{
            left: `${spark.left}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            animationDuration: `${spark.animationDuration}s`,
            animationDelay: `${spark.delay}s`,
            boxShadow: "0 0 10px 2px rgba(234, 179, 8, 0.6)",
          }}
        />
      ))}
    </div>
  );
}
