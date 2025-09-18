"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nextSpotlight } from "@/lib/announce";

export default function Spotlight() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (nextSpotlight.enabled && !sessionStorage.getItem("wedesi.dismiss.spotlight")) {
      setShow(true);
    }
  }, []);
  if (!show || !nextSpotlight.enabled) return null;

  return (
    <div className="bg-white text-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="truncate">
          <span className="font-medium">{nextSpotlight.label}</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={nextSpotlight.href}
            className="rounded-full border border-black/20 px-3 py-1 hover:bg-black hover:text-white transition"
          >
            {nextSpotlight.cta}
          </Link>
          <button
            aria-label="Dismiss"
            className="rounded-full px-2 py-1 hover:bg-black/10"
            onClick={() => {
              sessionStorage.setItem("wedesi.dismiss.spotlight", "1");
              setShow(false);
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
