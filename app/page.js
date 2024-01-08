import React from "react";
import Banner from "./pages/banner/page";
import ProductCards from "./pages/ProductCard/page";

const Home = () => {
  return (
    <div className="px-40">
      <Banner />
      <ProductCards />
    </div>
  );
};

export default Home;
