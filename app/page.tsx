import Hero from "@/components/home/Hero";
import ServicesRow from "@/components/home/ServicesRow";
import EventsCarousel from "@/components/home/EventsCarousel";
import PhotoGrid from "@/components/home/PhotoGrid";
import SupportSection from "@/components/home/SupportSection";
import ParallaxBand from "@/components/visuals/ParallaxBand";
import Reveal from "@/components/motion/Reveal";
import TopMarquee from "@/components/visuals/TopMarquee";
import SectionDivider from "@/components/visuals/SectionDivider";
import Carousel3D from "@/components/galleries/Carousel3D";

export default function HomePage() {
  return (
    <>
      <TopMarquee />
      <Hero />
      <ServicesRow />
      <SectionDivider />
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Reveal><h2 className="text-2xl md:text-3xl font-semibold text-white">Moments</h2></Reveal>
          <Reveal delay={0.08}><PhotoGrid /></Reveal>
          <Carousel3D />
        </div>
      </section>
      <ParallaxBand />
      <Reveal><EventsCarousel /></Reveal>
      <SectionDivider flip />
      <Reveal delay={0.06}><SupportSection /></Reveal>
    </>
  );
}
