"use client";
import { motion } from "framer-motion";
export default function SectionDivider({ flip=false }: { flip?: boolean }) {
  return (
    <div className={`${flip ? "rotate-180" : ""} relative z-10`}>
      <svg className="w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          initial={{ d: "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" }}
          animate={{ d: ["M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",
                          "M0,60 C240,0 1200,120 1440,60 L1440,120 L0,120 Z",
                          "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#7a1f2b" stopOpacity=".6"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity=".15"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
