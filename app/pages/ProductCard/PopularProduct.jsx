"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProduct = ({ popularItems }) => {
  console.log("Popular Product", popularItems);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900, // Large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const handleAddMoreClick = () => {
    // Your logic for handling the "AddMore" click
    console.log("AddMore Clicked");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="sm:font-thin md:font-semibold lg:font-bold">Popular</h3>
        <h3
          onClick={handleAddMoreClick}
          className="text-[#ff9c1c] cursor-pointer sm:font-thin md:font-semibold lg:font-bold"
        >
          AddMore
        </h3>
      </div>
      <Slider {...settings} className="gap-2 md:gap-4 lg:gap-8">
        {popularItems.map((item) => (
          <div key={item.Id} className="justify-center items-center ">
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
      </Slider>
    </div>
  );
};

export default PopularProduct;
