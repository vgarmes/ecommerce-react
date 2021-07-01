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

const SizeSelector = ({ variant = {}, setStock }) => {
  const classes = useStyles();
  const sizes = Object.keys(variant.stock);
  const stock = Object.values(variant.stock);

  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-size-native-simple">Size</InputLabel>
      <Select
        native
        value={state}
        onChange={handleChange}
        label="Size"
        inputProps={{
          name: "size",
          id: "outlined-size-native-simple",
        }}
        className={classes.formSelect}
      >
        <option key="-1" aria-label="None" value="" />
        {sizes.map((size, index) => {
          if (stock[index] > 0) {
            return (
              <option key={index} value={size}>
                {size}
              </option>
            );
          } else {
            return (
              <option key={index} value={size} disabled>
                {size}
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
