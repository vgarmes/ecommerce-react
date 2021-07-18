import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";

const Product = ({ id, model, brand, price, variants }) => {
  const classes = useStyles();
  return (
    <Link to={`/products/${id}`} className="no-decoration">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={variants[0].image.file.url}
          title={model}
        />
        <CardContent>
          <Typography variant="h6" className={classes.productText}>
            {model}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {brand}
          </Typography>
          <Typography variant="body1" className={classes.productPrice}>
            {formatPrice(price)}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            {variants.map(({ id, hex }) => (
              <ColorButton key={id} color={hex} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "100%", //16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  productText: {
    textTransform: "capitalize",
  },
  productPrice: {
    fontWeight: "bold",
  },
}));

const ColorButton = styled.button`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "#222")};
  margin-left: 0.5rem;
  border: ${(props) => (props.color === "#FFFFFF" ? "1px solid #222" : "none")};
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #fff;
  }
`;
export default Product;
