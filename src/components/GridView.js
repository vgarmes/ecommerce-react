import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { Product } from "./";
import { makeStyles } from "@material-ui/core/styles";

const ProductList = () => {
  const classes = useStyles();
  return (
    <section>
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
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: theme.spacing(4),
  },
}));

export default ProductList;
