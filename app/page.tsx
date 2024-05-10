import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/FeaturedCourse";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
    </>
  );
}
