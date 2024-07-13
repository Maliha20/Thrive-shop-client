
import HeroSection from "@/components/HeroSection/HeroSection";
import Gallery from '@/components/Gallery/Gallery';
import TopProducts from "@/components/topProducts/TopProducts";
import Benefits from "@/components/benefits/Benefits";


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Gallery></Gallery>
      <TopProducts></TopProducts>
      <Benefits></Benefits>
    </div>
  );
};

export default Home;