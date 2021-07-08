import React from "react";
import styled from "styled-components";
import {
  Box,
  ButtonGroup,
  IconButton,
  Button,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";

const AmountButtons = ({ amount, increase, decrease }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      m="auto"
      maxWidth={75}
      flexDirection={
        useMediaQuery(theme.breakpoints.up(400)) ? "row" : "column-reverse"
      }
    >
      <IconButton aria-label="decrease amount" size="small" onClick={decrease}>
        <RemoveCircleOutline fontSize="small" color="primary" />
      </IconButton>
      <Typography variant="h6">{amount}</Typography>
      <IconButton aria-label="increase amount" size="small" onClick={increase}>
        <AddCircleOutline fontSize="small" color="primary" />
      </IconButton>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({}));

export default AmountButtons;
