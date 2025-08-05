import React from "react";
import xaviour from "../assets/images/xaviour.jpeg";

import { REVIEW } from "../constants";
import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.jpeg";
import customer3 from "../assets/images/customer3.jpeg";
import customer4 from "../assets/images/customer4.jpeg";

export default function Review() {
  return (
    <section className="container mx-auto px-12 py-16" id="review">
      <div className="flex flex-col">
        <p className="mb-10 text-3xl leading-normal font-light tracking-tighter text-white md:mt-40 md:text-[3.5rem]">
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
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
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt="customer"
              width={80}
              height={80}
              className="h-[300px] w-[200px] rounded-lg border object-cover"
            />
          );
        })}
      </div>
    </section>
  );
}
