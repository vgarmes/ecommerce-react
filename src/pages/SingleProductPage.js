import React, { useState, useEffect } from "react";
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
import styled from "styled-components";

const SingleProductPage = () => {
  const classes = useStyles();
  const { id, variant_id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const [variantIndex, setVariantIndex] = useState(0);

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
      <Container component="section" className={classes.gridContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {variants && (
              <MainProductImage
                src={variants[variantIndex].image.file.url}
                alt={variants[variantIndex].image.title}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
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
            <AddToCart
              product={product}
              variantIndex={variantIndex}
              setVariantIndex={setVariantIndex}
            />
          </Grid>

          <Grid item xs={12} md={6}>
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
                    <TableCell align="right">
                      {variants && variants[variantIndex].id}
                    </TableCell>
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
        </Grid>
      </Container>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(4),
  },
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

const MainProductImage = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
`;

export default SingleProductPage;
