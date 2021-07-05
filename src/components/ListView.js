import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import products_reducer from "../reducers/products_reducer";
import { formatPrice } from "../utils/helpers";

const ListView = ({ products }) => {
  const classes = useStyles();
  return (
    <section>
      {products.map((product) => {
        const { id, model, brand, price, description, variants } = product;
        return (
          <Box
            key={id}
            className={classes.content}
            component="article"
            display="flex"
            alignItems="center"
            marginBottom={4}
          >
            <ImageContainer>
              <img src={variants[0].image.file.url} alt={model} />
            </ImageContainer>

            <Box className={classes.productInfo}>
              <Typography variant="h5" gutterBottom>
                {model}
              </Typography>
              <Typography variant="h6">{formatPrice(price)}</Typography>
              <Typography variant="body1" gutterBottom>
                {description.substring(0, 150)}...
              </Typography>
              <Link to={`/products/${id}`}>
                <Button variant="contained" color="primary">
                  Details
                </Button>
              </Link>
            </Box>
          </Box>
        );
      })}
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  productInfo: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: theme.spacing(2),
      textAlign: "center",
    },
  },
}));

const ImageContainer = styled.div`
  img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
  }
`;

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

export default ListView;
