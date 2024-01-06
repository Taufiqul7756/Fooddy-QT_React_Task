import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedCard = ({ recommendedItems }) => {
  console.log("RecommendedCard Product", recommendedItems);
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-2">
        <h3>Recommended</h3>
        <h3 className="text-[#ff9c1c]">AddMore</h3>
      </div>

      <Slider {...settings}>
        {recommendedItems.map((item) => (
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
      </Slider>
    </div>
  );
};

export default RecommendedCard;
