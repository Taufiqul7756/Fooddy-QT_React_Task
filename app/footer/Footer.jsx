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
      <div className="flex md:grid-cols-2 sm:grid-cols-1">
        {/* Left */}
        <div className="p-16 px-60">
          <div className="py-5 mb-5 flex relative items-center">
            <SearchBar placeholder="Enter your Email" />
            <button
              type="button"
              onClick={handleSubscribeClick}
              className=" flex justify-center items-center gap-1 font-sm ml-2 p-2 px-5 bg-[#f15c11] text-white rounded-lg relative right-[150px]"
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
            <div className="flex lg:gap-40 md:gap-20 sm:gap-10 justify-start items-center">
              <h3>Copyright©Tripp.All Right Reserved</h3>
              <div className="flex gap-3">
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
        <div className="hidden sm:block relative right-[200px]">
          <Image src={footerImg} alt="Footer image" width={350} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
