import React from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./";
import { makeStyles } from "@material-ui/core/styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "60",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoe-KkLcGR.png",
  },
  {
    id: 2,
    name: "Shoes",
    description: "Running shoes",
    price: "60",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/916e10d5-5583-4850-bf8c-8ee2eed26d72/air-zoom-pulse-sko-f1Q7rK.png",
  },
  {
    id: 3,
    name: "Shoes",
    description: "Running shoes",
    price: "60",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5b12aba-5c3c-4817-a829-7d5ef713cc5e/react-miler-mens-running-shoe-DgF6nr.png",
  },
  {
    id: 4,
    name: "Shoes",
    description: "Running shoes",
    price: "60",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cde221ba-ec30-4eb4-ae30-43ac0d548968/cosmic-unity-basketball-shoe-96Zs98.png",
  },
];

const ProductList = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default ProductList;
