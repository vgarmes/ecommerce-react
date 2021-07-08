import React from "react";
import { useCartContext } from "../context/cart_context";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Hidden,
  IconButton,
} from "@material-ui/core";
import AmountButtons from "./AmountButtons";
import { formatPrice } from "../utils/helpers";
import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = ({ id, model, image, price, color, size, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const classes = useStyles();

  const increase = () => {};

  const decrease = () => {};
  return (
    <TableRow key={id}>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Image src={image} alt={model} />
          <Box ml={2}>
            <Typography variant="body1">{model}</Typography>
            <Typography variant="body2" style={{ textTransform: "uppercase" }}>
              {color}
            </Typography>
            <Typography variant="body2" style={{ textTransform: "uppercase" }}>
              Size: {size}
            </Typography>

            <Hidden smUp>
              <Typography variant="body2">{formatPrice(price)}</Typography>
            </Hidden>
          </Box>
        </Box>
      </TableCell>
      <Hidden xsDown>
        <TableCell align="center">
          <Typography variant="body1">{formatPrice(price)}</Typography>
        </TableCell>
      </Hidden>
      <TableCell align="center">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </TableCell>
      <Hidden xsDown>
        <TableCell align="center">
          <Typography variant="body1">{formatPrice(price * amount)}</Typography>
        </TableCell>
      </Hidden>
      <TableCell align="center">
        <IconButton
          aria-label="remove item"
          size="small"
          onClick={() => removeItem(id)}
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const Image = withTheme(styled.img`
  width: 75px;
  height: 75px;
  display: block;
  object-fit: cover;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
`);

const useStyles = makeStyles((theme) => ({}));

export default CartItem;
