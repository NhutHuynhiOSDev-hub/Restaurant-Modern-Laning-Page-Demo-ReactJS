import React from "react";
import { CUSINES } from "../constants";

export default function Expertise() {
  return (
    <section className="container mx-auto px-12 py-16" id="expertise">
      <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
        Our Expertise
      </h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-6 border-b-4 border-dotted border-neutral-700/40 py-6 md:flex-row md:items-center md:justify-start md:gap-0"
            >
              <div className="flex pr-8 text-2xl text-white">{item.number}</div>
              <div className="flex w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full rounded-3xl bg-amber-600 object-cover"
                />
              </div>
              <div className="pl-0 md:pl-8">
                <h3 className="text-2xl tracking-tighter text-rose-300 uppercase">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg tracking-tighter text-white">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
