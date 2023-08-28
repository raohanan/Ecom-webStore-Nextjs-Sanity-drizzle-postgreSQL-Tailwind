import { oneProductType } from "@/components/utils/ProductDataArrayTypes";
import { FC } from "react";
import Card from "../Card";

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  let dataToSend = ProductData.slice(0,3)
  return (
    <div className="flex justify-center">
      {ProductData.map((item: oneProductType, index: number) => (
        <Card singleProductData={item} />
      ))}
    </div>
  );
};

export default ProductCarousel;
