import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./index.css";

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById("root")
);
