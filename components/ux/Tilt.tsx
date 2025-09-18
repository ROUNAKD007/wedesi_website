"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function Tilt({ children }: { children: ReactNode }) {
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const rotX = useTransform(ry, [-50, 50], [6, -6]);
  const rotY = useTransform(rx, [-50, 50], [-6, 6]);
  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        rx.set(e.clientX - (r.left + r.width / 2));
        ry.set(e.clientY - (r.top + r.height / 2));
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
