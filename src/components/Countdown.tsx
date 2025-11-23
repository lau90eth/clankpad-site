"use client";
import { useState, useEffect } from "react";

export function Countdown() {
  const target = new Date("2025-11-24T14:00:00Z").getTime();

  const calculate = () => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return { h: "00", m: "00", s: "00" };

    const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const m = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const s = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

    return { h, m, s };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-8xl font-mono font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
      {time.h}:{time.m}:{time.s}
    </div>
  );
}
