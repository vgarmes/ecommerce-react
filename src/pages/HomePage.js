import React from "react";
import { NavbarGap, FeaturedProducts, ProductList, Hero } from "../components";

const HomePage = () => {
  return (
    <main>
      <NavbarGap />
      <Hero />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;
