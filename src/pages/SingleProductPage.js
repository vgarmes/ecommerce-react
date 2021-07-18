import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import {
  Loading,
  Error,
  PageBreadcrumbs,
  Stars,
  AddToCart,
} from "../components";
import {
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import styled from "styled-components";

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
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { model, brand, description, stars, reviews, variants } = product;

  return (
    <Container component="main">
      <PageBreadcrumbs
        title={`${brand} ${model}`}
        path={[{ id: "products", name: "Products", url: "/products" }]}
      />
      <Grid
        container
        component="section"
        spacing={4}
        className={classes.gridContainer}
      >
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
            variant="h4"
            color="textSecondary"
            gutterBottom
          >
            {brand}
          </Typography>

          <Stars stars={stars} reviews={reviews} />

          <Box mt={2} mb={2}>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </Box>

          <AddToCart
            product={product}
            variantIndex={variantIndex}
            setVariantIndex={setVariantIndex}
          />
          <TableContainer component={Paper} className={classes.tableContainer}>
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
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(0.25),
  },
  stockInfo: {
    fontWeight: "bold",
  },
  textSuccess: {
    color: "green",
  },
  tableContainer: {
    marginTop: theme.spacing(4),
  },
  rowHeader: {
    backgroundColor: theme.palette.action.hover,
  },
  rowHeaderText: {
    fontWeight: "bold",
  },
}));

const MainProductImage = withTheme(styled.img`
  width: 100%;
  height: 400px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    height: 650px;
  }
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
`);

export default SingleProductPage;
