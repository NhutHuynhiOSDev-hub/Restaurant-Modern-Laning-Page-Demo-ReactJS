import React from "react";
import xaviour from "../assets/images/xaviour.jpeg";
import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.jpeg";
import customer3 from "../assets/images/customer3.jpeg";
import customer4 from "../assets/images/customer4.jpeg";

import { REVIEW } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const containerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Review() {
  return (
    <section className="container mx-auto px-12 py-16" id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={containerItemVariants}
          className="mb-10 text-3xl leading-normal font-light tracking-tighter text-white md:mt-40 md:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={containerItemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter text-white">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerItemVariants}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((item, index) => {
          return (
            <motion.img
              variants={containerItemVariants}
              key={index}
              src={item}
              alt="customer"
              width={80}
              height={80}
              className="h-[300px] w-[200px] rounded-lg border object-cover transition-all duration-300 hover:scale-110"
            />
          );
        })}
      </motion.div>
    </section>
  );
}
