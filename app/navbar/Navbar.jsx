"use client";
import Link from "next/link";
import React, { useState } from "react";
import UserMenu from "./UserMenu";
import SearchBar from "./Search";

import Select from "react-dropdown-select";

const options = [
  { value: "/", label: "Home" },
  { value: "/details", label: "Details" },
  { value: "/category", label: "Category" },
  { value: "/myfavorite", label: "My Favorites" },
  { value: "/profile", label: "Profile" },
  { value: "/login", label: "Login/Sign Up" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="
    sticky
    top-0
    w-full
    z-30
    shadow-sm
    "
    >
      {/* <nav>
        <ul className="flex gap-4">
          <li>
            {" "}
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/details">Details</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/category">Category</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/myfavorite">My Favorites</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/profile">Profile</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="">Login/Sign Up</Link>{" "}
          </li>
        </ul>
      </nav> */}
      <div className="py-4 border-b-[1px]">
        {/* Logo */}
        <div
          className="
          flex
          items-center
          justify-between
          "
        >
          <Link href="/">TG</Link>
          <div className="flex gap-2">
            <div className="">
              <SearchBar />
            </div>

            {/* Dropdown MENU */}
            <nav>
              <Select
                className="bg-white"
                options={options}
                labelField="label"
                valueField="value"
                onChange={(selected) => {
                  if (selected.length > 0) {
                    // Use the Link component for client-side navigation
                    window.location.href = selected[0].value;
                  }
                }}
              />
            </nav>
          </div>
          {/* User icon */}
          <div className="flex items-center gap-8 md:gap-12">
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
