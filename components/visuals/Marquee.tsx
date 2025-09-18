"use client";
import { useMemo } from "react";
export default function Marquee({ items }: { items: string[] }) {
  const doubled = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/5">
      <div className="animate-[marquee_20s_linear_infinite] flex gap-10 py-3">
        {doubled.map((t, i) => (<span key={i} className="text-white/70 text-sm">{t}</span>))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
