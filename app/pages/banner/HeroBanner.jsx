import Image from "next/image";
import React from "react";
import HeroImage from "../../../Images/hero.png";

const HeroBanner = () => {
  return (
    <div className="flex bg-[#ff9c1c] rounded-2xl my-10 ">
      {/* Left */}
      <div className="p-20">
        <h1 className="text-white font-black">Deliver Food To Your</h1>
        <h1 className="text-white font-black">Door Step|</h1>
        <p className="text-white font-sm">
          Authentic Food | Quick Service , Fast Delivery
        </p>
      </div>
      {/* Right */}
      <div>
        <Image
          src={HeroImage}
          alt="Description of the image"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
