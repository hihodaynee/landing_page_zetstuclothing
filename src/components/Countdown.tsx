"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-05-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex justify-center gap-2 sm:gap-4 font-roboto-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl font-bold bg-black text-white p-2 rounded w-12 sm:w-16 text-center">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs uppercase mt-1 text-gray-500">
            {unit === "days"
              ? "Ngày"
              : unit === "hours"
                ? "Giờ"
                : unit === "minutes"
                  ? "Phút"
                  : "Giây"}
          </span>
        </div>
      ))}
    </div>
  );
}
