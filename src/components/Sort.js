import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Apps as GridIcon, ViewList as ListIcon } from "@material-ui/icons";
import {
  Box,
  ButtonGroup,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const Sort = () => {
  const classes = useStyles();
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <ButtonGroup color="text.secondary" aria-label="products view">
        <Button
          className={`${classes.button} ${grid_view ? classes.active : null}`}
          onClick={setGridView}
        >
          <GridIcon />
        </Button>
        <Button
          className={`${classes.button} ${grid_view ? null : classes.active}`}
          onClick={setListView}
        >
          <ListIcon />
        </Button>
      </ButtonGroup>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexGrow="1"
        className={classes.textContent}
      >
        <Typography variant="body1">
          {products.length} products found
        </Typography>
        <Divider className={classes.divider} />
        <Form>
          <label htmlFor="sort">Sort by</label>
          <select name="sort" id="sort" value={sort} onChange={updateSort}>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </Form>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "stretch",
    },
  },
  button: {
    padding: theme.spacing(0),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  textContent: {
    textAlign: "center",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginBottom: theme.spacing(2),
    },
  },
  divider: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Form = withTheme(styled.form`
  select {
    border-color: transparent;
    background-color: transparent;
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
  label {
    margin-right: 0;
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
`);

export default Sort;
