"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
export default function MouseBlob() {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 15 });
  const sy = useSpring(y, { stiffness: 80, damping: 15 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => { x.set(e.clientX - 200); y.set(e.clientY - 200); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x,y]);
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed z-[-1] h-[400px] w-[400px] rounded-full
                 bg-[radial-gradient(circle_at_30%_30%,rgba(122,31,43,0.55),transparent_60%)]
                 blur-[60px] opacity-70"
    />
  );
}
