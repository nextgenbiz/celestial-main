import Hero from "./components/home/Hero";
import About from "./components/home/About";
import CorePhilosophy from "./components/home/CorePhilosophy";
import QuickHighlights from "./components/home/QuickHighlights";
import VisionMission from "./components/home/VisionMission";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CorePhilosophy />
      <QuickHighlights />
      <VisionMission />
    </>
  );
}