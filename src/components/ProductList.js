import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Typography } from "@material-ui/core";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <Typography variant="h5">
        Sorry, no products matched your search
      </Typography>
    );
  }

  if (grid_view) {
    return <GridView products={products} />;
  }

  return <ListView products={products} />;
};

export default ProductList;
