import React from "react";
import { motion } from "framer-motion";

function DishCard({ dish }) {
  return (
    <div className="transition-all duration-300 hover:scale-110">
      <img src={dish.image} alt={dish.title} className="rounded-3xl p-2" />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-white">
          {dish.title}
        </h3>
        <p className="text-sm text-white">{dish.description}</p>
      </div>
    </div>
  );
}

export default DishCard;
