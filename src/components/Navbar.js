import React, { useState, useCallback } from "react";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Hidden,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle,
  ShoppingCart,
  ExitToApp,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import logo from "../assets/images/logo-192x192.png";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavHeader from "./NavHeader";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <NavHeader />

          <Hidden smDown>
            <NavLinks>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <Link key={id} to={url} className={classes.navLink}>
                    <Button
                      size="large"
                      classes={{
                        text: classes.menuButtonText,
                      }}
                    >
                      {text}
                    </Button>
                  </Link>
                );
              })}
            </NavLinks>
          </Hidden>

          <div>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {myUser ? (
              <IconButton
                aria-label="Log out"
                color="inherit"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <ExitToApp />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Log in"
                color="inherit"
                onClick={loginWithRedirect}
              >
                <AccountCircle />
              </IconButton>
            )}

            <Hidden mdUp>
              <IconButton
                aria-label="Open navigation"
                onClick={openSidebar}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    margin: "0 1em",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
}));

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export default Navbar;
