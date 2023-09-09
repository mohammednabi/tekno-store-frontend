"use client";
import Link from "next/link";
import { useState } from "react";

import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import SideNavbar from "./Sidenavbar";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
  const hadelSideNav = () => {
    setSidenav(!sidenav);
  };
  return (
    <nav className="fixed  w-full h-24 shadow-xl bg-gray-400 ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-6">
        <div className="flex justify-between items-center  ">
          {/* icons */}
          <div className="icon_size relative">

            <AiOutlineShoppingCart  />
          </div>

          <div className="icon_size">
            <AiOutlineUser />
          </div>
          <div className="icon_size">
            <AiOutlineHeart />
          </div>
          <AiOutlineSearch className="icon_size" />
        </div>
        <div>
          <div>
            <ul className="hidden lg:flex">
              <Link href="/about">
                <li className="ml-10 uppercase hover:border-b text-xl">
                  Why us
                </li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 uppercase hover:border-b text-xl">
                  contact
                </li>
              </Link>
              <Link href="/services">
                <li className="ml-10 uppercase hover:border-b text-xl">
                  services
                </li>
              </Link>
              <Link href="/ourservices">
                <li className="mx-10 uppercase hover:border-b text-xl">
                  our-services
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex cursor-pointer pl-24 z-20">
          <AiOutlineMenu size={25} onClick={hadelSideNav} />
          <div
            className={sidenav ? "fixed bg-gray-500 cursor-pointer" : "hidden"}
          >
            <SideNavbar data={hadelSideNav} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;