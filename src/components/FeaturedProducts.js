import React from "react";
import { useProductsContext } from "../context/products_context";
import { Error, Loading, Product } from "./";
import { Container, Typography, Grid } from "@material-ui/core";

const FeaturedProducts = () => {
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
        variant="h4"
        align="center"
        gutterBottom
      >
        Featured Products
      </Typography>

      <Grid container spacing={2}>
        {featured.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
