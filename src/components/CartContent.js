import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { Box, Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <CartTable cart={cart} />
      <div>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
        >
          Continue shopping
        </Button>
        <Button variant="contained" color="secondary" onClick={clearCart}>
          clear cart
        </Button>
      </div>
      <CartTotals />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default CartContent;
