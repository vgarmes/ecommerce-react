import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import products_reducer from "../reducers/products_reducer";
import { formatPrice } from "../utils/helpers";

const Product = ({ id, name, description, price, image }) => {
  const classes = useStyles();
  return (
    <Link to={`/products/${id}`} className="no-decoration">
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant="h6" className={classes.productText}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Nike
          </Typography>
          <Typography variant="body1" className={classes.productPrice}>
            {formatPrice(price)}
          </Typography>
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

export default Product;
