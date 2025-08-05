import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

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
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;compiletab. All rights reserved
      </p>
      <p className="text-center tracking-tighter text-neutral-500">
        cloned by Nhut Huynh with ❤️
      </p>
    </section>
  );
}
