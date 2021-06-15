import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NavbarGap = () => {
  const classes = useStyles();
  return <div className={classes.toolbar} />;
};

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

export default NavbarGap;
