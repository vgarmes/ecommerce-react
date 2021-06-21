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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";

const Addtocart = ({ id, price, stock, colors = [] }) => {
  const classes = useStyles();

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

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
            <span variant="body1" color="error">
              Out of stock
            </span>
          )}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionsColumn} disableSpacing>
        <Box
          display="flex"
          justifyContent="flex-start"
          width="100%"
          marginBottom="1em"
        >
          <Typography variant="body1">Colors:</Typography>
          {colors.map((color, index) => {
            return (
              <ColorButton
                key={index}
                color={color}
                isActive={mainColor === color}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <CheckIcon /> : null}
              </ColorButton>
            );
          })}
        </Box>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        {stock > 0 && (
          <Button variant="contained" color="primary" fullWidth>
            Add to cart
          </Button>
        )}
      </CardActions>
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

const ColorButton = styled.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "#222")};
  margin-left: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #fff;
  }
`;
export default Addtocart;
