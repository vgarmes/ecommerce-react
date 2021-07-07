import React from "react";
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SizeSelector = ({ variant = {}, size, setSize, setSizeStock }) => {
  const classes = useStyles();
  const sizes = Object.keys(variant.stock);
  const stock = Object.values(variant.stock);

  const handleChange = (e) => {
    setSize(e.target.value);
    setSizeStock(variant.stock[e.target.value]);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-size-native-simple">Size</InputLabel>
      <Select
        native
        value={size}
        onChange={handleChange}
        label="Size"
        inputProps={{
          name: "size",
          id: "outlined-size-native-simple",
        }}
        className={classes.formSelect}
      >
        <option key="-1" aria-label="None" value="" />
        {sizes.map((singleSize, index) => {
          if (stock[index] > 0) {
            return (
              <option key={index} value={singleSize}>
                {singleSize}
              </option>
            );
          } else {
            return (
              <option key={index} value={singleSize} disabled>
                {singleSize}
              </option>
            );
          }
        })}
      </Select>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    //minWidth: 120,
  },
}));

export default SizeSelector;
