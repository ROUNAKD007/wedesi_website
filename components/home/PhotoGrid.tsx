import Image from "next/image";
import Link from "next/link";
import { photosLink } from "@/lib/links";

const thumbs = [
  "/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg",
  "/images/p4.jpg", "/images/p5.jpg", "/images/p6.jpg",
];

export default function PhotoGrid() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Moments</h2>
          <Link href={photosLink} className="text-sm text-white/80 hover:text-white underline" target="_blank">Open gallery</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {thumbs.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image src={src} alt="WeDesi photo" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
