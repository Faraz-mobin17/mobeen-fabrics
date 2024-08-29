import Carousel from "@/components/Carousel";
import Collections from "@/components/Collections";
import FeatureBar from "@/components/FeatureBar";
import Navbar from "@/components/Navbar";
import SareeShowcase from "@/components/Sarees/SareeShowcase";
import StoreSection from "@/components/StoreSection";
import SocialMedia from "@/components/SocialMedia";
import BrandSection from "@/components/BrandSection";
import Visitus from "@/components/Visitus";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeatureBar />
      <SareeShowcase />
      <BrandSection />
      <StoreSection />
      <Collections />
      <SocialMedia />
      <Visitus />
      <Footer />
    </>
  );
}
