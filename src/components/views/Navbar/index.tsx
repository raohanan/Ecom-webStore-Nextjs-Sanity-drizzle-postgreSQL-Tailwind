"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "../subComponents/DropDown";
import MobNavbar from "../subComponents/MobNavbar";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <div>
      <div className=" py-6 flex justify-between items-center space-x-12">
        <div className="w-36 flex-shrink-0">
          <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-4 text-lg font-medium">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li className="flex items-center relative rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    className="mt-1 rotate-180 group-hover:rotate-0 duration-300"
                    size={15}
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div className="invisible group-hover:visible absolute top-8 left-0 py-4 px-6 bg-gray-100 font-light rounded-md min-w-[7rem]">
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="border flex items-center text-gray-600 px-3 rounded-md">
            <BiSearch />
            <input
              type="text"
              className="pl-1 pr-5 py-1 w-80"
              placeholder="Search in our store"
            />
          </div>
          <div className="flex-shrink-0 py-2 relative w-11 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 absolute top-1 right-2 bg-red-500 text-xs font-light rounded-full flex justify-center items-center">
              0
            </div>
            <BsCart2 size={24} />
          </div>
        </div>
        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={29} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobNavbar />}
    </div>
  );
};

export default Navbar;
