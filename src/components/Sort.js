import React from "react";
import { useFilterContext } from "../context/filter_context";
import { Apps as GridIcon, ViewList as ListIcon } from "@material-ui/icons";
import {
  Box,
  ButtonGroup,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  NativeSelect,
  MenuItem,
  Divider,
  Grid,
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
  } = useFilterContext();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
      <Typography variant="body1" className={classes.productsAmount}>
        {products.length} products found
      </Typography>
      <Divider className={classes.divider} />
      <Form>
        <label htmlFor="sort">Sort by</label>
        <select name="sort" id="sort" value={"price-lowest"}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </Form>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(0),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  productsAmount: {
    marginLeft: theme.spacing(2),
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
