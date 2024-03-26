import { Features } from "../Features";
import { Footer } from "../Footer";
import { LandingHeader } from "../Header/LandingHeader";
import { HeroSection } from "../main/HeroSection";
import { PricingSection } from "../Pricing";



export const Landing = () => {
  return (
   <div id="top-page">
     <LandingHeader />
     <HeroSection 
      title='Get premium for 4 days'
      amount ={'$566'} />
      <Features />
      <PricingSection />
      <Footer />
    </div>
  );
  
}



