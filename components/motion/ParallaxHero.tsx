"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxHero({ children }:{ children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);   // subtle
  const o = useTransform(scrollY, [0, 400], [1, 0.85]);  // gentle fade

  if (reduce) return <div className="relative">{children}</div>;

  return (
    <motion.div style={{ y, opacity: o }} className="relative">
      {children}
    </motion.div>
  );
}
