import Image from "next/image";
import React from "react";
import HeroImage from "../../../Images/hero.png";

const HeroBanner = () => {
  return (
    <div className="hidden sm:block flex flex-col md:flex-row bg-[#ff9c1c] rounded-2xl my-10">
      {/* Left (Top on small screens) */}
      <div className="p-2 sm:p-5 md:p-10 lg:p-20 md:w-1/2">
        <h1 className="text-white font-black">Deliver Food To Your</h1>
        <h1 className="text-white font-black">Door Step|</h1>
        <p className="text-white font-sm">
          Authentic Food | Quick Service, Fast Delivery
        </p>
      </div>
      {/* Right (Image with background on small screens) */}
      <div className="relative w-full md:w-1/2">
        <Image
          src={HeroImage}
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
