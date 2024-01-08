"use client";

import React, { useState } from "react";
import BackDrop from "./BackDrop";
import Avatar from "./Avatar";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleOpen}
          className="    
        cursor-pointer
        text-[#ff9c1c]
        "
        >
          <Avatar onClick={toggleOpen} />
          {/* <AiFillCaretDown /> */}
        </div>
      </div>
      {isOpen && (
        <>
          <div className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-700 rounded shadow">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Log in
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Sign up
              </li>
            </ul>
          </div>
          {/* <BackDrop onClick={toggleOpen} /> */}
        </>
      )}
    </>
  );
};

export default UserMenu;
