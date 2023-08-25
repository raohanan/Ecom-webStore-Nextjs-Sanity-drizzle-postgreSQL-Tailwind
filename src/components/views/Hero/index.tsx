import { HeroImg, baazar, bustle, instyle, versace } from "@/components/assets";
import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  const btnText = " Start \n Shopping";
  return (
    <div>
      <div className="py-5 px-1 flex justify-between items-center">
        {/* Right Side */}
        <div className=" space-y-8 max-w-lg md:max-w-sm">
          <button
            aria-label="Redirect the user to sale page"
            className="rounded-md bg-primaryWhite text-purple-900 font-medium px-4 py-2"
          >
            {" "}
            Sale 70 %
          </button>
          <h1 className="text-5xl sm:text-6xl md:text-6xl text-gray-800 font-semibold">
            An Industrial Take on Streetwear
          </h1>
          <p>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button
            aria-label="Redirect the user to sale page"
            className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-900 text-white font-semibold py-5 px-7"
          >
            <BsCart2 size={26} />
            <p className="whitespace-pre leading-5">{btnText}</p>
          </button>
          <div className="grid grid-cols-2 sm:flex gap-5">
            <Image src={baazar} alt="baazar logo" />
            <Image src={bustle} alt="bustle logo" />
            <Image src={versace} alt="versace logo" />
            <Image src={instyle} alt="instyle logo" />
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden md:flex bg-primaryWhite rounded-full ">
          <Image src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
