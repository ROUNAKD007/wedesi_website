import HeroCentered from "@/components/home/HeroCentered";
import SliderRail from "@/components/home/SliderRail";
import EventsTeaser from "@/components/home/EventsTeaser";

export const metadata = {
  title: "WeDesi @ UIC — South Asian Student Community",
  description: "Events, culture, and connection for South Asian students at UIC.",
};

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroCentered />
      <SliderRail />
      <EventsTeaser />
    </div>
  );
}
