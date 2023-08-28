import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/views/Hero";
import ProductTypes from "@/components/views/ProductTypes";
// import ProductCarousel from "@/components/views/ProductCarousel";

async function fetchAllProductsData() {
  // let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch");
  // }
  // return res.json();
  return {response: "Hi"}
}

export default async function Home() {
  let response = await fetchAllProductsData();
  console.log("response: ", response);
  return (
    <div>
      <Hero />
      <ProductTypes />
      {/* <ProductCarousel productData={response} /> */}
    </div>
  );
}
