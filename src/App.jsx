import React from "react";
import Dishes from "./components/Dishes";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Mission from "./components/Mission";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-900 antialiased">
      <NavBar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
    </main>
  );
};

export default App;
