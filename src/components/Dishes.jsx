import React, { use } from "react";
import DishCard from "./DishCard";

import { DISHES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

export default function Dishes() {
  return (
    <div>
      <section className="container mx-auto px-12 py-16" id="dishes">
        <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
          Our Dishes
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-5"
        >
          {DISHES.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <DishCard dish={item} key={index} />;
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
