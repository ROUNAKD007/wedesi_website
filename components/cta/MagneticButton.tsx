"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export default function MagneticButton(
  { children, className = "", ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const dx = useSpring(x, { stiffness: 300, damping: 20 });
  const dy = useSpring(y, { stiffness: 300, damping: 20 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ translateX: dx, translateY: dy }}
      className={`rounded-full bg-white px-7 py-3 text-black transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
