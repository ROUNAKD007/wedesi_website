import Reveal from "@/components/motion/Reveal";

const items = [
  { title: "Culture",  desc: "Garba, Diwali, Holi, film nights." },
  { title: "Community",desc: "Weekly meetups, chai chats, collabs." },
  { title: "Career",   desc: "Alumni panels, leadership, projects." },
];

export default function WhatWeDo() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What we do</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal delay={0.05 * (i + 1)} key={it.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition will-change-transform hover:translate-y-[-4px] hover:border-white/20">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-neutral-300">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
