import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-900 antialiased">
      <NavBar />
      <HeroSection />
    </main>
  );
};

export default App;
