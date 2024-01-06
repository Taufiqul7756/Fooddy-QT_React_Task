"use client";

import Card from "@/app/components/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularProduct = ({ popularItems }) => {
  console.log("Popular Product", popularItems);
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3>Popular</h3>
        <h3 className="text-[#ff9c1c]">AddMore</h3>
      </div>
      <div className="flex flex-wrap  gap-4">
        {popularItems.map((item) => (
          <div key={item.Id} className="justify-center items-center">
            <img
              alt={item.Name}
              src={item.ImageUrl}
              className="rounded-lg h-64 object-cover-fit sm:h-25 sm:w-25 lg:h-[230px] lg:w-[185px]"
              width={400}
              height={300}
            />
            <h5 className="mt-2 font-sm text-gray-950-900 sm:text-sm">
              {item.Name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
