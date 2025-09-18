"use client";
import { useReducedMotion } from "framer-motion";

export default function VideoReel() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black">
      <div className="relative mx-auto max-w-[1400px] px-0 md:px-4 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <video
            src="/videos/reel.mp4"
            className="h-[44vh] md:h-[60vh] w-full object-cover"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            controls={reduce}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
