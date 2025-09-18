"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedBackdrop() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const x = useTransform(sx, v => (v - 0.5) * 40);
  const y = useTransform(sy, v => (v - 0.5) * 40);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_18%,rgba(122,31,43,0.22),transparent_70%)]" />
      <motion.div
        style={{ x, y }}
        className="absolute left-1/2 top-1/3 h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full
                   bg-[conic-gradient(from_0deg,rgba(255,255,255,0.06),rgba(122,31,43,0.25),rgba(255,255,255,0.06))]
                   blur-[80px] opacity-70"
      />
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.12] mix-blend-overlay" />
    </div>
  );
}
