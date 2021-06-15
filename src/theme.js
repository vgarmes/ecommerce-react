import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app

const darkBlack = "rgb(36, 40, 44)";
const white = "rgb(255,255,255)";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ":root": {
          "--radius": "0.25rem",
        },
        ".section": {
          padding: "3rem 0",
        },
        ".section-center": {
          width: "90vw",
          margin: "0 auto",
        },
        ".text-white": {
          color: "#fff",
        },
      },
    },
    MuiBreadcrumbs: {
      root: {
        marginTop: "1em",
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
