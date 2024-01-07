import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "@/app/components/Form";

const RecommendedCard = ({ recommendedItems }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log("RecommendedCard Product", recommendedItems);
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
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    setIsPopupOpen(false); // Close the popup after submission
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Recommended</h3>
        <h3
          className="text-[#ff9c1c] font-bold cursor-pointer "
          onClick={handleAddMoreClick}
        >
          AddMore
        </h3>
      </div>

      <Slider {...settings}>
        {recommendedItems.map((item) => (
          <div key={item.Id} className="justify-center items-center">
            <img
              alt={item.Name}
              src={item.ImageUrl}
              className="rounded-lg h-64 object-cover-fit sm:h-25 sm:w-25 "
              width={400}
              height={300}
            />
            <h5 className="mt-2 font-sm text-gray-950-900 sm:text-sm">
              {item.Name}
            </h5>
          </div>
        ))}
      </Slider>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4">
            <button
              onClick={handlePopupClose}
              className="float-right text-red-500"
            >
              Close
            </button>
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedCard;
