import React, { FC } from "react";
import { oneProductType } from "../utils/ProductDataArrayTypes";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import PortableText from "react-portable-text";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <div className="border-4 max-w-sm min-w-[24rem] space-y-3">
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          src={urlFor(singleProductData.image[0])
            .width(1000)
            .height(1000)
            .url()}
          alt={singleProductData.image[0].alt}
        />
      </div>
      <div className="space-y-1 text-gray-600 text-lg">
        <h5>{singleProductData.productName}</h5>
        <PortableText content={singleProductData.description} />
        <p>${singleProductData.price}</p>
      </div>
    </div>
  );
};

export default Card;
