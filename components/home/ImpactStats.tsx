/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setVal(Math.floor(target * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { val, ref };
}

export default function ImpactStats() {
  const a = useCountUp(500);
  const b = useCountUp(50);
  const c = useCountUp(10);
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">Made by students, for students</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div ref={a.ref as any} className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold text-white">{a.val}+</div>
            <div className="mt-1 text-white/70">Members</div>
          </div>
          <div ref={b.ref as any} className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold text-white">{b.val}+</div>
            <div className="mt-1 text-white/70">Events hosted</div>
          </div>
          <div ref={c.ref as any} className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl font-semibold text-white">{c.val}+</div>
            <div className="mt-1 text-white/70">Causes supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}
