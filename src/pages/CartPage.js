import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageBreadcrumbs } from "../components";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CartPage = () => {
  const classes = useStyles();
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Container component="main">
        <PageBreadcrumbs title="Cart" />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.empty}
        >
          <Typography variant="h2" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
          >
            Fill it
          </Button>
        </Box>
      </Container>
    );
  }
  return (
    <Container component="main">
      <PageBreadcrumbs title="Cart" />
      <CartContent />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  empty: {
    minHeight: "80vh",
  },
}));

export default CartPage;
