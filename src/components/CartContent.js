import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { Divider, Button } from "@material-ui/core";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <Divider />
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
    </div>
  );
};

export default CartContent;
