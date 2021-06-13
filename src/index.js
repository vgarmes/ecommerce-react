import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { ProductsProvider } from "./context/products_context";
import theme from "./theme";
import "./index.css";

ReactDOM.render(
  <ProductsProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
