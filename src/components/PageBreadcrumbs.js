import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import { NavbarGap } from "../components";

const PageBreadcrumbs = ({ title, path = [] }) => {
  return (
    <>
      <NavbarGap />
      <Breadcrumbs aria-label="breadcrumb">
        <Link key="home" component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        {path.map((item) => {
          const { id, url, name } = item;
          return (
            <Link key={id} component={RouterLink} to={url} color="inherit">
              {name}
            </Link>
          );
        })}
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
    </>
  );
};

export default PageBreadcrumbs;
