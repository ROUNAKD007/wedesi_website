"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  from?: string; // e.g. "0%"
  to?: string;   // e.g. "-15%"
  className?: string;
};

/**
 * Parallax wrapper: moves children on scroll.
 * Hooks are declared unconditionally at top-level (ESLint Rule of Hooks compliant).
 */
export default function Parallax({ children, from = "0%", to = "-15%", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
