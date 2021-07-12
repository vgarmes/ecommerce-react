import React from "react";
import { useCartContext } from "../context/cart_context";
import { CartContent, PageBreadcrumbs, CartEmpty } from "../components";
import { Container, Box, Typography, Button } from "@material-ui/core";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return <CartEmpty title="Cart" />;
  }
  return (
    <Container component="main">
      <PageBreadcrumbs title="Cart" />
      <CartContent />
    </Container>
  );
};

export default CartPage;
