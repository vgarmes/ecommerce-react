import React, { useState } from "react";
import { formatPrice } from "../utils/helpers";
import { VariantSelector, SizeSelector } from "../components";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCartContext } from "../context/cart_context";

const Addtocart = ({ product, variantIndex, setVariantIndex }) => {
  const { addToCart } = useCartContext();
  const { id, price, variants } = product;
  const classes = useStyles();
  const [sizeStock, setSizeStock] = useState("");
  const [size, setSize] = useState("");

  return (
    <Card className={classes.cardProduct}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {formatPrice(price)}
        </Typography>
        <Typography variant="body1" className={classes.stockInfo}>
          {sizeStock > 0 ? (
            <span className={classes.textSuccess}>In Stock</span>
          ) : (
            <span variant="body1" className={classes.textError}>
              Out of stock
            </span>
          )}
        </Typography>
      </CardContent>

      {variants && (
        <CardActions className={classes.cardActionsColumn} disableSpacing>
          <Box alignSelf="flex-start">
            <Typography variant="body1" gutterBottom>
              {variants && variants[variantIndex].color}
            </Typography>
          </Box>

          <VariantSelector
            variants={variants}
            variantIndex={variantIndex}
            setVariantIndex={setVariantIndex}
          />

          <SizeSelector
            variant={variants[variantIndex]}
            size={size}
            setSize={setSize}
            setSizeStock={setSizeStock}
          />

          {sizeStock > 0 && (
            <Button
              component={Link}
              to="/cart"
              variant="contained"
              color="primary"
              onClick={() =>
                addToCart(id, product, variants[variantIndex], size)
              }
              fullWidth
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  stockInfo: {
    fontWeight: "bold",
  },
  textSuccess: {
    color: "green",
  },
  textError: {
    color: "red",
  },
  rowHeader: {
    backgroundColor: theme.palette.action.hover,
  },
  rowHeaderText: {
    fontWeight: "bold",
  },
  cardActionsColumn: {
    flexDirection: "column",
  },
  colorsContainer: {
    alignSelf: "flex-start",
  },
}));

export default Addtocart;
