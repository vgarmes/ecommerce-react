import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app

const darkBlack = "rgb(36, 40, 44)";
const white = "rgb(255,255,255)";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".lg-mg-top": {
          marginTop: "50px",
        },
        ".text-white": {
          color: "#fff",
        },
      },
    },
  },
  palette: {
    common: {
      darkBlack,
    },
  },
});

export default theme;
