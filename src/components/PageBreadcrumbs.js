import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Breadcrumbs, Link } from "@material-ui/core";
import { NavbarGap } from "../components";

const PageBreadcrumbs = ({ title }) => {
  return (
    <Container>
      <NavbarGap />
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
    </Container>
  );
};

export default PageBreadcrumbs;
