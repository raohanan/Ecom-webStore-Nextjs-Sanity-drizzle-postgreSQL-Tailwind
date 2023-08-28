import React, { FC } from "react";
import { oneProductType } from "../utils/ProductDataArrayTypes";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
  }

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <div className="border-4">
      <div className="w-64">
        <Image width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} />
      </div>
      <div></div>
    </div>
  );
};

export default Card;
