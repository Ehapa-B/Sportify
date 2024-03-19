import { Features } from "../Features";
import { Footer } from "../Footer";
import { LandingHeader } from "../Header/LandingHeader";
import { PricingSection } from "../Pricing";
import { HeroSection } from "../main/HeroSection";


export const Landing = () => {
  return (
   <div>
     <LandingHeader />
     <HeroSection />
      <Features />
      <PricingSection />
      <Footer />
    </div>
  );
  
}



