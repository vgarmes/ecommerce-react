import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Box,
  InputBase,
  IconButton,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  Slider,
} from "@material-ui/core";
import styled from "styled-components";
import { Search as SearchIcon, Check as CheckIcon } from "@material-ui/icons";

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

  const handleSlider = (name, value) => {
    const e = {
      currentTarget: { name: name },
      target: { value: value },
    };

    updateFilters(e);
  };

  return (
    <div>
      <Paper
        component="form"
        onSubmit={(e) => e.preventDefault()}
        className={classes.root}
      >
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
        <Box className={classes.formControl}>
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
              name="category"
              size="small"
              className={`${classes.categoryBtn} ${
                cat === category ? "active" : null
              }`}
              onClick={updateFilters}
              fullWidth
            >
              {cat}
            </Button>
          ))}
        </Box>
        <Box className={classes.formControl}>
          <Typography
            variant="body1"
            className={classes.categoryTitle}
            gutterBottom
          >
            Brand
          </Typography>
          <Select
            native
            value={brand}
            inputProps={{
              name: "brand",
              id: "brand",
            }}
            className={classes.selectInput}
            onChange={updateFilters}
          >
            {brands.map((singleBrand, index) => (
              <option key={index} value={singleBrand}>
                {singleBrand}
              </option>
            ))}
          </Select>
        </Box>
        <Box className={classes.formControl}>
          <Typography
            variant="body1"
            className={classes.categoryTitle}
            gutterBottom
          >
            Colors
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <Button
                    key={index}
                    className={`${classes.allColorsBtn} ${
                      c === color ? "active" : null
                    }`}
                    name="color"
                    data-color={c}
                    hexColor={c}
                    onClick={updateFilters}
                  >
                    All
                  </Button>
                );
              }
              return (
                <ColorButton
                  key={index}
                  name="color"
                  data-color={c}
                  hexColor={c}
                  isActive={c === color}
                  onClick={updateFilters}
                >
                  {c === color ? (
                    <CheckIcon style={{ fontSize: "0.75rem" }} />
                  ) : null}
                </ColorButton>
              );
            })}
          </Box>
        </Box>
        <Box clasName={classes.formControl}>
          <Typography
            variant="body1"
            className={classes.categoryTitle}
            gutterBottom
          >
            Price
          </Typography>
          <Typography variant="body2">{formatPrice(price)}</Typography>
          <CustomSlider
            valueLabelDisplay="auto"
            aria-label="price slider"
            min={min_price}
            max={max_price}
            value={price}
            valueLabelDisplay="off"
            name="price"
            onChange={(e, value) => handleSlider("price", value)}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={clearFilters}>
          clear filters
        </Button>
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
    marginBottom: theme.spacing(4),
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
    "&.active": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  selectInput: {
    width: "100%",
  },
  allColorsBtn: {
    minWidth: 0,
    padding: "2px",
    "&.active": {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));

const ColorButton = styled.button`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: ${(props) => (props.hexColor ? props.hexColor : "#222")};
  margin-left: 0.5rem;
  border: ${(props) =>
    props.hexColor === "#FFFFFF" ? "1px solid #222" : "none"};
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => (props.hexColor === "#FFFFFF" ? "#000000" : "#FFFFFF")};
  }
  active {
    opacity: 1;
  }
`;

const CustomSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}))(Slider);

export default Filters;
