import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import FoundingStory from "@/components/FoundingStory";
import Services from "@/components/Services";
import LNGSolutions from "@/components/LNGSolutions";
import PowerGeneration from "@/components/PowerGeneration";
import GasTreatment from "@/components/GasTreatment";
import Sustainability from "@/components/Sustainability";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <FoundingStory />
      <Services />
      <LNGSolutions />
      <PowerGeneration />
      <GasTreatment />
      <Sustainability />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;