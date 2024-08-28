import ArtSilkSaree from "./components/ArtSilkSaree";
import BrandSection from "./components/BrandSection";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import FAQSection from "./components/FAQsection";
import FeatureBar from "./components/FeatureBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import StoreSection from "./components/StoreSection";
import Visitus from "./components/Visitus";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeatureBar />
      <ArtSilkSaree />
      <Collections />
      <BrandSection />
      <StoreSection />
      <FAQSection />
      <SocialMedia />
      <Visitus />
      <Footer />
    </>
  );
}

export default App;
