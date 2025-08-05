import React from "react";
import { CONTACT } from "../constants";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container mx-auto px-12 py-16" id="contact">
      <h2 className="mb-12 text-center text-4xl tracking-tighter text-white lg:text-5xl">
        Contact Us
      </h2>
      <div className="text-neutral-400">
        {CONTACT.map((item, index) => {
          return (
            <div key={index}>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="my-20 border-b-2 border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl"
              >
                {item.value}
              </motion.p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
