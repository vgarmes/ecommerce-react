import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  InputBase,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Filters = () => {
  const classes = useStyles();
  const {
    filters: { text, category, brand, color, min_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const brands = getUniqueValues(all_products, "brand");
  const colors = getUniqueValues(
    all_products.map((product) => product.variants).flat(),
    "hex"
  );

  return (
    <div>
      <Paper component="form" className={classes.root}>
        <Box display="flex" alignItems="center" className={classes.formControl}>
          <InputBase
            className={classes.searchInput}
            placeholder="Search products"
            inputProps={{ "aria-label": "search products" }}
            type="text"
            name="text"
            value={text}
            onChange={updateFilters}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <Box className="form-control">
          <Typography
            variant="body1"
            className={classes.categoryTitle}
            gutterBottom
          >
            Category
          </Typography>
          {categories.map((cat, index) => (
            <Button
              key={index}
              size="small"
              className={`${classes.categoryBtn} ${
                cat === category ? classes.active : null
              }`}
              isActive={cat === category}
              fullWidth
            >
              {cat}
            </Button>
          ))}
        </Box>
        <Box className="form-control"></Box>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    //display: "flex",
    //alignItems: "center",
    width: "100%",
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  searchInput: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  categoryTitle: {
    fontWeight: "bold",
  },
  categoryBtn: {
    display: "block",
    textAlign: "left",
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

export default Filters;
