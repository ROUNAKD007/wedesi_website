"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["show up", "belong", "create", "lead", "celebrate"];

export default function WordFlip() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-block relative w-[9ch] text-maroon">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-0 top-0"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">{words[0]}</span>
    </span>
  );
}
