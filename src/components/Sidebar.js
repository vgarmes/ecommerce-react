import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  AccountCircle,
  ShoppingCart,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";

const Sidebar = (props) => {
  const { width, open, onClose, anchor, links, selectedItem, theme } = props;
  const classes = useStyles();
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor={anchor}
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="space-between">
          <NavHeader />
          <IconButton onClick={onClose} aria-label="Close Navigation">
            <CloseIcon color="primary" />
          </IconButton>
        </Box>
      </Toolbar>
      <List className={classes.drawerList}>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <Link
              key={id}
              to={url}
              className={classes.drawerLink}
              onClick={onClose}
            >
              <ListItem button className={classes.drawerButton}>
                <ListItemText
                  primary={
                    <Typography className={classes.drawerLinkText}>
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
  },
  drawerLink: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "capitalize",
  },
  drawerLinkText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    textAlign: "center",
  },
  drawerList: {
    height: "100%",
  },
}));

export default Sidebar;
