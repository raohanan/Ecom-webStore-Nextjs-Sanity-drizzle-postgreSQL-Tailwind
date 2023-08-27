// import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/views/Hero";
import ProductTypes from "@/components/views/ProductTypes";
import productCarousel from "@/components/views/productCarousel";

// async function fetchAllProductsData() {
//   let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }
//   return res.json();
// }

export default async function Home() {
  // let response = await fetchAllProductsData();
  // console.log("response: ", response);
  return (
    <div>
      <Hero />
      <ProductTypes />
      
    </div>
  );
}
