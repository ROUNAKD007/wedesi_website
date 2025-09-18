"use client";
import { motion, useScroll, useTransform } from "framer-motion";
export default function ParallaxBand() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <motion.div style={{ y }}
      className="relative my-12 h-48 w-full overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#7a1f2b_0%,#111_40%,#7a1f2b_100%)] opacity-60" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0,transparent_25%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06)_0,transparent_25%)]" />
    </motion.div>
  );
}
