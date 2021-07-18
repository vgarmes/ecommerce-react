import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
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
              <Typography variant="h5" paragraph>
                {model}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {brand}
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

export default ListView;
