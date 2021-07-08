import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { Paper, Box, Divider, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const classes = useStyles();

  return (
    <Box mt={4} mb={4}>
      <CartTable cart={cart} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        flexDirection={useMediaQuery("(min-width:400px)") ? "row" : "column"}
      >
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
          style={{
            marginBottom: `${
              useMediaQuery("(min-width:400px)") ? "0" : "10px"
            }`,
          }}
        >
          Continue shopping
        </Button>
        <Button variant="contained" color="secondary" onClick={clearCart}>
          clear cart
        </Button>
      </Box>
      <CartTotals />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default CartContent;
