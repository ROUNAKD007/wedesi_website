import Hero from "@/components/home/Hero";
import ServicesRow from "@/components/home/ServicesRow";
import VideoReel from "@/components/home/VideoReel";
import EventsCarousel from "@/components/home/EventsCarousel";
import ImpactStats from "@/components/home/ImpactStats";
import PhotoGrid from "@/components/home/PhotoGrid";
import MembershipCallout from "@/components/home/MembershipCallout";
import SupportSection from "@/components/home/SupportSection";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "WeDesi @ UIC — South Asian Student Community",
  description: "Events, culture, and connection for South Asian students at UIC.",
};

export default function HomePage() {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesRow />
      <section id="culture"><VideoReel /></section>
      <section id="community"><EventsCarousel /></section>
      <section id="career"><ImpactStats /></section>
      <section id="impact"><PhotoGrid /></section>
      <MembershipCallout />
      <SupportSection />
      <SiteFooter />
    </div>
  );
}
