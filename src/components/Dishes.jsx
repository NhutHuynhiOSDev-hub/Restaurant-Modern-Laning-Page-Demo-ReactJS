import React from "react";
import DishCard from "./DishCard";
import { DISHES } from "../constants";

export default function Dishes() {
  return (
    <div>
      <section className="container mx-auto px-12 py-16" id="dishes">
        <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
          Our Dishes
        </h2>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-5">
          {DISHES.map((item, index) => {
            return <DishCard dish={item} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}
