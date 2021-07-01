import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  PageBreadcrumbs,
  ProductImages,
  Stars,
  AmountButtons,
  VariantSelector,
  SizeSelector,
} from "../components";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";

const Addtocart = ({ id, price, variants, variantIndex, setVariantIndex }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(1);
  const [stock, setStock] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      if (oldAmount + 1 > stock) {
        return stock;
      }
      return oldAmount + 1;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      if (oldAmount - 1 < 1) {
        return 1;
      }
      return oldAmount - 1;
    });
  };

  return (
    <Card className={classes.cardProduct}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {formatPrice(price)}
        </Typography>
        <Typography variant="body1" className={classes.stockInfo}>
          {stock > 0 ? (
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

          <SizeSelector variant={variants[variantIndex]} setStock={setStock} />

          {stock > 0 && (
            <Button variant="contained" color="primary" fullWidth>
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
