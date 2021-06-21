import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app

const darkBlack = "rgb(36, 40, 44)";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ":root": {
          "--radius": "0.25rem",
        },
        a: {
          textDecoration: "none",
        },
        ".section": {
          padding: "3rem 0",
        },
        ".section-center": {
          width: "90vw",
          margin: "0 auto",
        },
        ".section-title": {
          marginTop: "2em",
        },
        ".no-decoration": {
          textDecoration: "none",
        },
        ".text-capitalize": {
          textTransform: "capitalize",
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

export default responsiveFontSizes(theme);
