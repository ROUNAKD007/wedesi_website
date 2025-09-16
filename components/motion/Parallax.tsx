"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Parallax({ children }:{ children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);     // subtle lift
  const o = useTransform(scrollY, [0, 400], [1, 0.9]);     // slight fade
  return <motion.div style={{ y, opacity: o }}>{children}</motion.div>;
}
