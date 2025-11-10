'use client';

import Hero from "../components/insights/Hero";
import CourierLogistics from "../components/insights/CourierLogistics";
import Challenges from "../components/insights/Challenges";
import dynamic from "next/dynamic";

const MarketSnapshot = dynamic(
  () => import("../components/insights/MarketSnapshot"),
  { ssr: false }
);

const TAMSAMSOM = dynamic(
  () => import("../components/insights/TAMSAMSOM"),
  { ssr: false }
);

export default function Insights() {
  return (
    <>
      <Hero />
      <CourierLogistics />
      <Challenges />
      <MarketSnapshot />
      <TAMSAMSOM />
    </>
  );
}
