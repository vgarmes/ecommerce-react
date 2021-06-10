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

const Sidebar = (props) => {
  const { width, open, onClose, anchor, links, selectedItem, theme } = props;
  const classes = useStyles();
  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.drawerHeader}>
        <ListItem
          style={{
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
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
  drawerHeader: {
    width: 200,
    justifyContent: "flex-end",
  },
  drawerLink: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "capitalize",
  },
  drawerLinkText: {
    fontSize: "1.5rem",
  },
  drawerButton: {
    paddingLeft: "2em",
  },
  drawerList: {
    height: "100%",
  },
}));

export default Sidebar;
