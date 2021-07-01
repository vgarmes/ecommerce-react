import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Grid, Container, Typography } from "@material-ui/core";
import GridView from "./GridView";
import { makeStyles } from "@material-ui/core/styles";

const ProductList = () => {
  const classes = useStyles();
  const { filtered_products: products, grid_view } = useFilterContext();
  return <GridView products={products}></GridView>;
};

const useStyles = makeStyles((theme) => ({}));

export default ProductList;
