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
                cat === category ? classes.active : null
              }`}
              isActive={cat === category}
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
          <Box display="flex" alignItems="center">
            {colors.map((c, index) => {
              if (c === "all") {
                return <Button key={index}>All</Button>;
              }
              return (
                <ColorButton key={index} color={c}>
                  {c === color ? <CheckIcon /> : null}
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
            Price range
          </Typography>
          <Slider
            value={[min_price, max_price]}
            onChange={console.log("slider")}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={formatPrice}
          />
        </Box>
        <Button variant="contained" color="primary">
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
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  selectInput: {
    width: "100%",
  },
}));

const ColorButton = styled.button`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "#222")};
  margin-left: 0.5rem;
  border: ${(props) => (props.color === "#FFFFFF" ? "1px solid #222" : "none")};
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #fff;
  }
`;

export default Filters;
