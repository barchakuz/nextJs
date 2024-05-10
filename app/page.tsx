import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/FeaturedCourse";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourse />
    </>
  );
}
