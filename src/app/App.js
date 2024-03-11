import './App.css';
import { LandingHeader } from './components/Header/LandingHeader';
import { HeroSection } from './components/main/HeroSection';
import { Features } from './components/Features';
import { Premium } from './components/Premium';


export function App() {
    return (
        <div>
          <LandingHeader />
          <HeroSection />
          <Features />
          <Premium />
        </div>
    );
  
}


