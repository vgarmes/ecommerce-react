import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const CartColumns = ({ cart }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="cart">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.model}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>Amount buttons</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
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
    minWidth: 650,
  },
}));

export default CartColumns;
