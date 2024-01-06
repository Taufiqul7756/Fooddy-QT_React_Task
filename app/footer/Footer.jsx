"use client";
import React from "react";
import SearchBar from "../components/Search";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const handleSubscribeClick = () => {
    console.log("Subscribe Clicked");
  };
  return (
    <div className=" bg-[#ff9c1c]">
      {/* Left */}
      <div className="p-16">
        <div className="py-5 mb-5 flex relative items-center">
          <SearchBar placeholder="Enter your Email" />
          <button
            type="button"
            onClick={handleSubscribeClick}
            className=" flex justify-center items-center gap-1 font-sm ml-2 p-1 px-2 bg-[#f15c11] text-white rounded-lg relative right-[125px] "
          >
            Subscribe
            <FaArrowRightLong />
          </button>
        </div>
        <div className="">
          <div>
            <h1 className="font-bold">
              Pti<span className="text-red-600 font-bold">.</span>{" "}
            </h1>
          </div>
          <div className="flex gap-10">
            <h3>Copyright©Tripp.All Right Reserved</h3>
            <h1>Social Me dia</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
