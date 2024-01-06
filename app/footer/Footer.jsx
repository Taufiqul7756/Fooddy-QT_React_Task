import React from "react";
import SearchBar from "../components/Search";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#ff9c1c]">
      {/* Left */}
      <div className="p-16">
        <div className="py-5 flex relative ">
          <SearchBar placeholder="Enter your Email" />
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
