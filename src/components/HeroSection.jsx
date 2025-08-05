import React from "react";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/hero.jpeg";
import heroVideo from "../assets/videos/hero.mp4";
import missionVideo from "../assets/videos/mission.mp4";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-70% to-black"></div>
      <div className="pb20 relative z-20 flex h-screen flex-col justify-end">
        <img src={logo} alt="restaura" className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </div>
    </section>
  );
};

export default HeroSection;
