import React from "react";

import { ABOUT } from "../constants";
import about from "../assets/images/about.jpeg";

export default function About() {
  return (
    <section className="container mx-auto px-12 py-16" id="about">
      <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
        About Us
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img src={about} className="rounded-3xl lg:-rotate-3" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <h2 className="text-4xl tracking-tighter text-white lg:text-6xl">
            {ABOUT.header}
          </h2>
          <div className="mt-1 mb-8 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
          <p className="mb-8 text-2xl leading-relaxed tracking-tighter text-white lg:max-w-xl">
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  );
}
