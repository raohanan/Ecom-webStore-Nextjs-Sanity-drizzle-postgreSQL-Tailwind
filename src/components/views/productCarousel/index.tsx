"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { oneProductType } from "@/components/utils/ProductDataArrayTypes";
import { Component, FC, ReactNode } from "react";
import Card from "../Card";

// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
//   ProductData,
// }) => {
//   return (
//     <div className="flex justify-center">
//       {ProductData.map((item: oneProductType, index: number) => (
//         <Card singleProductData={item} />
//       ))}
//     </div>
//   );
// };
// export default ProductCarousel;

export class ProductCarousel extends Component<{
  ProductData: Array<oneProductType>;
}> {
  render(): ReactNode {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.ProductData.map((item: oneProductType, index: number) => (
            < Card key={index} singleProductData={item}/>
          ))}
        </Slider>
      </div>
    );
  }
}
