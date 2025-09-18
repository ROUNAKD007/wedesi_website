"use client";
import { motion, useReducedMotion } from "framer-motion";

export const fadeUp = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -120px 0px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export function Stagger({ children, delay = 0, gap = 0.06 }:{
  children: React.ReactNode[] | React.ReactNode, delay?: number, gap?: number
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  const arr = Array.isArray(children) ? children : [children];
  return (
    <>
      {arr.map((c, i) => (
        <motion.div key={i} {...fadeUp(delay + i * gap)}>{c}</motion.div>
      ))}
    </>
  );
}
