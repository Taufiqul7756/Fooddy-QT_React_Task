import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img from "../../Images/hero.png";

const Card = ({ product = {} }) => {
  const { id = "", name = "", imageUrl = "" } = product;
  return (
    <div className=" justify-center items-center">
      <Link href={`/product/${id}`} passHref>
        <div className="block">
          <Image
            alt={name}
            src={imageUrl}
            className="h-64 object-cover-fit sm:h-25 sm:w-25 lg:h-[230px] lg:w-[185px]"
            width={400}
            height={300}
          />

          <h5 className="mt-2 font-sm text-gray-950-900 sm:text-sm">{name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
