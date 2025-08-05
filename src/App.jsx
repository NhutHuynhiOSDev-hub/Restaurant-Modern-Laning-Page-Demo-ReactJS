import React from "react";
import About from "./components/About";
import Review from "./components/Review";
import Dishes from "./components/Dishes";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-900 antialiased">
      <NavBar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
