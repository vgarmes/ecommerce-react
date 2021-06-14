import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.content}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <div className={classes.toolbar} />
        <Typography variant="h1">404</Typography>
        <Typography paragraph variant="h4">
          Sorry, the page you tried cannot be found
        </Typography>
        <Link to="/" className={classes.link}>
          <Button className={classes.homeButton} variant="outlined">
            Back to menu
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    height: "100vh",
  },
  link: {
    textDecoration: "none",
  },
  homeButton: {
    marginTop: "3em",
  },
}));

export default ErrorPage;
