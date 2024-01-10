"use client";
import Link from "next/link";
import React, { useState } from "react";

const Button = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="relative">
        <button
          className="text-black bg-white  
                focus:outline-none focus:border-[1px] font-medium 
                rounded-lg text-sm px-4 py-3 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          MENU{" "}
          <svg
            className="w-4 h-4 mr-4 ml-3"
            fill="none"
            stroke="#ff9c1c"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {/* Dropdown menu */}
        <div
          className={`${
            isDropdownOpen ? "absolute" : "hidden"
          } bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 right-0 top-full`}
          id="dropdown"
        >
          <ul className="py-1" aria-labelledby="dropdown">
            <Link
              href="/"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/details"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Details
            </Link>
            <Link
              href="/category"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Category
            </Link>
            <Link
              href="/myfav"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              My Favorites
            </Link>
            <Link
              href="/profile"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Profile
            </Link>
            <Link
              href="/login"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              Sign Up
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Button;
