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
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        p-2
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700
        "
        >
          <Avatar onClick={toggleOpen} />
          {/* <AiFillCaretDown /> */}
        </div>
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
