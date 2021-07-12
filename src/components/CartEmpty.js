import React from "react";
import { PageBreadcrumbs } from "../components";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const CartEmpty = ({ title }) => {
  const classes = useStyles();
  return (
    <Container component="main">
      <PageBreadcrumbs title={title} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.empty}
      >
        <Typography variant="h2" gutterBottom>
          Your cart is empty
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
        >
          Fill it
        </Button>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  empty: {
    minHeight: "80vh",
  },
}));

export default CartEmpty;
