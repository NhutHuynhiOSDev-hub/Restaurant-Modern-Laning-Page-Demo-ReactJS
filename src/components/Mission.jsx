import React from "react";
import missionVideo from "../assets/videos/mission.mp4";
import mission from "../assets/images/mission.jpeg";
import { MISSION } from "../constants";

export default function Mission() {
  return (
    <section className="container mx-auto px-12 py-16" id="mission">
      <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
        Our Mission
      </h2>
      <div className="relative flex items-center justify-center">
        <video
          className="w-full rounded-3xl"
          poster={mission}
          src={missionVideo}
          itemType="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
        <p className="absolute max-w-lg text-center tracking-tighter text-white lg:text-3xl">
          {MISSION}
        </p>
      </div>
    </section>
  );
}
