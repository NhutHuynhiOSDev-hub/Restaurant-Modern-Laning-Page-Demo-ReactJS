import React from "react";
import Dishes from "./components/Dishes";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-900 antialiased">
      <NavBar />
      <HeroSection />
      <Dishes />
    </main>
  );
};

export default App;
