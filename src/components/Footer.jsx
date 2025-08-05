import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="container mx-auto mt-20 mb-8" id="footer">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              target={"_blank"}
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:opacity-80"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center tracking-tighter text-neutral-500"
      >
        &copy;compiletab. All rights reserved
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center tracking-tighter text-neutral-500"
      >
        cloned by Nhut Huynh with ❤️
      </motion.p>
    </section>
  );
}
