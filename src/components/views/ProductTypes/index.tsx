import { SummerSeason, SummerSeason2, SummerSeason3 } from "@/components/assets";
import Image from "next/image";
import React from "react";

const ProductTypes = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      {/* Heading */}
      <div className="text-center space-y-3">
        <p className="text-blue-600 text-sm font-bold tracking-widest">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-gray-800 py-8">
        {/* First Grid */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between col-span-1 sm:col-span-2 px-12 bg-col1">
          <div className="sm:max-w-[13rem] py-8">
          <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
          <p className="text-xl text-gray-700 font-semibold">For the summer season</p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="summer season" src={SummerSeason}/>
          </div>
        </div>
        {/* Second Grid */}
        <div className="w-full row-span-1 flex flex-col items-center sm:row-span-2 h-full bg-col2">
          <div className="px-4 py-6">
           <p className="font-medium">Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
        <div className="w-64">
            <Image width={1000} height={1000} alt="summer season2" src={SummerSeason2}/>
          </div>
        </div>
        {/* Third Grid */}
        <div className="w-full row-span-1 sm:row-span-2 flex flex-col items-center h-full bg-col3">
        <div className="px-4 py-6">
           <p className="font-medium">Flex Push Button Bomber</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>
        <div className="w-64">
            <Image width={1000} height={1000} alt="summer season3" src={SummerSeason3}/>
          </div>
        </div>
        {/* Fourth Grid */}
        <div className="py-9 text-primaryWhite w-full col-span-1 sm:col-span-2 bg-col4 flex flex-col justify-center items-center space-y-3">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
          aria-label="Redirect user to Dine Week End Sale"
          className="py-1 px-8 text-lg font-medium bg-[#474747] rounded-lg tracking-widest"
          >DINEWEEKENDSALE</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
