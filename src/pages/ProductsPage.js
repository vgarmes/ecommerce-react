import React from "react";
import { PageBreadcrumbs, Filters, Sort, ProductList } from "../components";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ProductsPage = () => {
  const classes = useStyles();
  return (
    <main>
      <PageBreadcrumbs title="Products" />
      <Container>
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} sm={4} md={3}>
            <Filters />
          </Grid>

          <Grid item xs={12} sm={8} md={9}>
            <Sort />
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default ProductsPage;
