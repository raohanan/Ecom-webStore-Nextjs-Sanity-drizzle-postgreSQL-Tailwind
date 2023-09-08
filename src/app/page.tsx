import Hero from "@/components/views/Hero";
import ProductTypes from "@/components/views/ProductTypes";
import {ProductCarousel} from "@/components/views/ProductCarousel";
import { responseType } from "@/components/utils/ProductDataArrayTypes";
import Jewellery from "@/components/views/Jewellery";
import NewsLatter from "@/components/views/NewsLatter";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  let { result }:responseType = await fetchAllProductsData();
  return (
    <div>
      <Hero />
      <ProductTypes />
      <ProductCarousel ProductData={result} />
      <Jewellery />
      <NewsLatter />
     
    </div>
  );
}
