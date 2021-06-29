import React, { useEffect } from "react";
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
  AddToCart,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SingleProductPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    model,
    brand,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    variants,
  } = product;
  return (
    <main>
      <PageBreadcrumbs
        title="Product"
        path={[{ id: "products", name: "Products", url: "/products" }]}
      />
      <Container component="section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ProductImages images={variants.map((variant) => variant.image)} />
            Images
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="text-capitalize" variant="h3">
              {model}
            </Typography>
            <Typography
              className="text-capitalize"
              variant="body2"
              color="textSecondary"
              gutterBottom
            >
              {brand}
            </Typography>
            <Stars stars={stars} reviews={reviews} />
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="product specifications">
                <TableBody>
                  <TableRow>
                    <TableCell
                      className={classes.rowHeader}
                      component="th"
                      scope="row"
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.rowHeaderText}
                      >
                        SKU
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{sku}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className={classes.rowHeader}
                      component="th"
                      scope="row"
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.rowHeaderText}
                      >
                        Company
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className="text-capitalize" variant="body2">
                        {brand}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} md={4}>
            <AddToCart {...product} />
          </Grid>
        </Grid>
      </Container>
    </main>
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
}));

export default SingleProductPage;
