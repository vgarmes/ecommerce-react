import React from "react";
import { useProductsContext } from "../context/products_context";
import { Error, Loading, Product } from "./";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const FeaturedProducts = () => {
  const classes = useStyles();
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container component="section">
      <Typography
        className="section-title"
        variant="h3"
        align="center"
        gutterBottom
      >
        Featured Products
      </Typography>
      <Container className={classes.content}>
        <Grid container spacing={4}>
          {featured.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: theme.spacing(4),
  },
}));

export default FeaturedProducts;
