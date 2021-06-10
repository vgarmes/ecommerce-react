import React, { useState, useCallback } from "react";
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
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import logo from "../assets/images/logo-192x192.png";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, [isDrawerOpen]);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, [isDrawerOpen]);

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <LogoImage src={logo} alt="ecommerce logo" />
            eCommerce
          </Typography>

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
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton
              component={Link}
              to="/"
              aria-label="Log in"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Hidden mdUp>
              <IconButton
                aria-label="Open navigation"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar
        links={links}
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      />
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
  title: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
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

const LogoImage = styled.img`
  margin-right: 10px;
  height: 25px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export default Navbar;
