import React from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./";
import { makeStyles } from "@material-ui/core/styles";

const GridView = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      component="section"
      className={classes.gridContainer}
      spacing={4}
    >
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          component="article"
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    paddingTop: theme.spacing(4),
  },
}));

export default GridView;
