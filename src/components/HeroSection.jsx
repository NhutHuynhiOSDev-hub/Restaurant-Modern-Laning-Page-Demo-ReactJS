import React from "react";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/hero.jpeg";
import heroVideo from "../assets/videos/hero.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          poster={hero}
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-70% to-black"></div>
      <div className="pb20 relative z-20 flex h-screen flex-col justify-end">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="restaura"
          className="w-full p-4"
        />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </div>
    </section>
  );
};

export default HeroSection;
