import { SummerSeason4 } from "@/components/assets";
import Image from "next/image";

const Jewellery = () => {
  return (
    <div className="px-1 text-gray-700">
      {/* Top */}
      <div className="flex justify-start py-12 md:justify-end text-4xl md:text-5xl font-bold">
        <h6 className="max-w-md">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left */}
        <div className="relative grid gap-10 basis-1/2 grid-cols-2 grid-rows-2">
          
          <div className="max-w-[13rem] space-y-3">
            <h6 className="font-semibold text-lg">
              Using Good Quality Material
            </h6>
            <p className="text-lg leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-3">
            <h6 className="font-semibold text-lg">
              Using Good Quality Material
            </h6>
            <p className="text-lg leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-3">
            <h6 className="font-semibold text-lg">
              Using Good Quality Material
            </h6>
            <p className="text-lg leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-3">
            <h6 className="font-semibold text-lg">
              Using Good Quality Material
            </h6>
            <p className="text-lg leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex  py-4 flex-col lg:flex-row basis-1/2">
          <div className="w-full lg:w-80">
            <Image width={1000} height={1000} src={SummerSeason4} alt="summerSeason picture" />
          </div>
          <div className="py-4 lg:px-8">
            <p style={{wordSpacing:"0.8rem"}} className="h-[88%] text-lg pb-4 lg:max-w-[15rem]">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="text-white bg-gray-900 rounded-sm py-4 px-6">See All Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
