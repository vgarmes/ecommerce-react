import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Grid, Container, Typography } from "@material-ui/core";
import GridView from "./GridView";
import ListView from "./ListView";
import { makeStyles } from "@material-ui/core/styles";

const ProductList = () => {
  const classes = useStyles();
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

const useStyles = makeStyles((theme) => ({}));

export default ProductList;
