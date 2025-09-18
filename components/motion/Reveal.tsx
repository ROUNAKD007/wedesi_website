"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({
  children, delay = 0, y = 18,
}: { children: React.ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -120px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
