import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import SplashCursor from "./components/SplashCursor";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { Contact } from "./components/sections/Contact";
import LightRays from "./components/LightRays";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#EFA3F0"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <ProjectsSection />
        <SplashCursor />
        <RevealOnScroll />
        <Contact />
      </div>
    </>
  );
}

export default App;
