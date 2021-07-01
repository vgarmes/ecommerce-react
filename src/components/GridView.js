import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { Product } from "./";
import { makeStyles } from "@material-ui/core/styles";

const GridView = ({ products }) => {
  const classes = useStyles();
  return (
    <section>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product key={product.id} {...product} />;
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: theme.spacing(4),
  },
}));

export default GridView;
