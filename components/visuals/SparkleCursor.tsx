"use client";
import { useEffect, useRef } from "react";

export default function SparkleCursor() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; };
    resize(); addEventListener("resize", resize);
    const parts: {x:number;y:number;vx:number;vy:number;life:number;}[] = [];
    const onMove = (e: MouseEvent) => {
      for (let i=0;i<4;i++) {
        parts.push({ x: e.clientX*dpr, y: e.clientY*dpr, vx: (Math.random()-0.5)*0.6, vy: -Math.random()*0.8, life: 1 });
      }
    };
    addEventListener("mousemove", onMove);
    let id:number;
    const tick = () => {
      ctx.clearRect(0,0,c.width,c.height);
      parts.forEach(p => {
        p.x += p.vx*dpr; p.y += p.vy*dpr; p.vy += 0.02*dpr; p.life -= 0.02;
        ctx.globalAlpha = Math.max(p.life,0)*0.7;
        ctx.fillStyle="#fff"; ctx.beginPath(); ctx.arc(p.x,p.y,1.2*dpr,0,6.28); ctx.fill();
      });
      for (let i=parts.length-1; i>=0; i--) if (parts[i].life<=0) parts.splice(i,1);
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => { removeEventListener("resize", resize); removeEventListener("mousemove", onMove); cancelAnimationFrame(id); };
  }, []);
  return <div className="fixed inset-0 pointer-events-none -z-10"><canvas ref={ref} /></div>;
}
