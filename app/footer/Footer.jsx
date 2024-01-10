"use client";
import React from "react";
import SearchBar from "../components/Search";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerImg from "../../Images/footer.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const handleSubscribeClick = () => {
    console.log("Subscribe Clicked");
  };
  return (
    <div className=" bg-[#ff9c1c] mt-40 ">
      <div className="flex flex-col sm:flex-row ">
        {/* Left */}
        <div className="p-4 sm:p-8 lg:p-16 xl:p-24 mb-4 sm:mb-8 w-full sm:w-1/2">
          <div className="py-4 sm:py-8 mb-4 sm:mb-8 flex flex-col sm:flex-row items-center relative">
            <SearchBar placeholder="Enter your Email" />
            <button
              type="button"
              onClick={handleSubscribeClick}
              className=" flex justify-center items-center gap-1 font-sm ml-2 p-2 px-5 bg-[#f15c11] sm:bg-gray text-white rounded-lg 
              sm:absolute lg:right-[200px] lg:py-1 md:right-0 sm:right-0"
            >
              Subscribe
              <FaArrowRightLong />
            </button>
          </div>
          <div className="text-center sm:text-left">
            <div>
              <h1 className="font-bold">
                Pti<span className="text-red-600 font-bold">.</span>{" "}
              </h1>
            </div>
            <div className="md:flex gap-5 grid-cols-2 md:gap-10 lg:gap-20 items-center justify-center sm:justify-start">
              <h3>Copyright©Tripp.All Right Reserved</h3>
              <div className="flex gap-3 ml-40">
                <Link
                  href="https://google.com/"
                  target="_blank"
                  className="bg-gray-300 rounded-full p-3"
                >
                  <FaGoogle color="#ff9c1c" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="bg-gray-300 rounded-full p-3"
                  target="_blank"
                >
                  <FaTwitter color="#ff9c1c" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="bg-gray-300 rounded-full p-3"
                  target="_blank"
                >
                  <FaInstagram color="#ff9c1c" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden sm:block relative sm:right-0 sm:w-1/2">
          <Image src={footerImg} alt="Footer image" width={350} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
