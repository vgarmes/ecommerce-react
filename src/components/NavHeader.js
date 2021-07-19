import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo192.png";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const classes = useStyles();
  return (
    <Typography
      component={Link}
      to="/"
      variant="h6"
      className={classes.title}
      color="inherit"
    >
      <LogoImage src={logo} alt="ecommerce logo" />
      ninetynine sports
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
}));

const LogoImage = styled.img`
  margin-right: 10px;
  height: 25px;
`;

export default NavHeader;
