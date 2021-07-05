import React from "react";
import { PageBreadcrumbs, Filters, Sort, ProductList } from "../components";
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

const ProductsPage = () => {
  return (
    <main>
      <PageBreadcrumbs title="Products" />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Filters />
          </Grid>

          <Grid item xs={9}>
            <Sort />
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default ProductsPage;
