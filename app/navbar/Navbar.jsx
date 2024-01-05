import Link from "next/link";
import React from "react";
import UserMenu from "./UserMenu";
import SearchBar from "./Search";

const Navbar = () => {
  return (
    <div
      className="
    sticky
    top-0
    w-full
    bg-slate-200
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
        <div
          className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
        >
          <Link href="/">TG</Link>
          <div className="">
            <SearchBar />
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
