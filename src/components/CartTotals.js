import React from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const classes = useStyles();
  console.log(total_amount);
  return (
    <Box component="section" display="flex" className={classes.root}>
      <Card component="article" className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography>Subtotal:</Typography>
          <Typography>{formatPrice(total_amount)}</Typography>
          <Typography color="textSecondary">Shipping</Typography>
          <Typography color="textSecondary">
            {formatPrice(shipping_fee)}
          </Typography>

          <Divider className={classes.divider} />
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5">{formatPrice(total_amount)}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            color="primary"
            fullWidth
          >
            Proceed to checkout
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  card: {
    minWidth: 275,
  },
  cardContent: {
    display: "grid",
    gridTemplateColumns: "200px 1fr",
  },
  divider: {
    gridColumn: "1 / -1",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default CartTotals;
