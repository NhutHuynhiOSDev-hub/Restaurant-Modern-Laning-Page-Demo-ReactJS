import React from "react";
import mission from "../assets/images/mission.jpeg";
import missionVideo from "../assets/videos/mission.mp4";

import { MISSION } from "../constants";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="container mx-auto px-12 py-16" id="mission">
      <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
        Our Mission
      </h2>
      <div className="relative flex items-center justify-center">
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full rounded-3xl"
          poster={mission}
          src={missionVideo}
          itemType="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute h-full w-full rounded-3xl bg-black/40"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.55 }}
          className="absolute max-w-lg text-center tracking-tighter text-white lg:text-3xl"
        >
          {MISSION}
        </motion.p>
      </div>
    </section>
  );
}
