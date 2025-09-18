"use client";
import { motion } from "framer-motion";
const imgs = ["/images/p1.jpg","/images/p2.jpg","/images/p3.jpg","/images/p4.jpg","/images/p5.jpg"];
export default function Carousel3D() {
  return (
    <div className="mx-auto mt-8 perspective-[1200px]">
      <div className="relative mx-auto h-64 w-full max-w-5xl [transform-style:preserve-3d]">
        {imgs.map((src, i) => (
          <motion.div
            key={src}
            initial={{ rotateY: i*72, z: 0 }}
            animate={{ rotateY: i*72, z: 260 }}
            transition={{ duration: 0 }}
            className="absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2
                       overflow-hidden rounded-2xl border border-white/10 bg-white/5
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)] [transform-style:preserve-3d]"
            style={{ transform: `rotateY(${i*72}deg) translateZ(260px)` }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
