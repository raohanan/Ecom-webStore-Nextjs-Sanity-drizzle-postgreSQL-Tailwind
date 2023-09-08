import React from "react";

const NewsLatter = () => {
  return (
    <div className="relative text-center space-y-4 h-[60vh] px-4 flex flex-col justify-center items-center text-gray-800">
      <h6 className="absolute -z-10 text-stone-200 font-bold  text-7xl md:text-[7.5rem] leading-[6rem] ">
        NewsLatter.
      </h6>
      <h6 className="text-4xl font-bold">Subscribe Our Newslatter</h6>
      <p>Get the latest information and promo offers directly.</p>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <input
          type="text"
          className="border border-gray-600 py-4 px-2 md:px-4 flex flex-grow w-80"
          placeholder="Input email address"
        />
        <button className=" text-white bg-gray-900 rounded-sm py-4 px-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NewsLatter;
