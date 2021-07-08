import React from "react";
import { useCartContext } from "../context/cart_context";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Hidden,
} from "@material-ui/core";
import CartItem from "./CartItem";
import AmountButtons from "./AmountButtons";

const CartColumns = ({ cart }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="cart">
        <Hidden xsDown>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="center">Options</TableCell>
            </TableRow>
          </TableHead>
        </Hidden>
        <TableBody>
          {cart.map((item) => (
            <CartItem {...item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 300,
  },
}));

export default CartColumns;
