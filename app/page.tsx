import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/FeaturedCourse";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolCards from "./components/MusicSchoolCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructor from "./components/Instructor";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <MusicSchoolCards />
      <UpcomingWebinars />
      <Instructor />
    </>
  );
}
