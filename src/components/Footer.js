import React from "react";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Hidden,
  withStyles,
  withWidth,
  isWidthUp,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@material-ui/icons";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <footer className="lg-mg-top">
      <div className={classes.footerInner}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <form>
              <Box display="flex" flexDirection="column">
                <Box mb={1}>
                  <TextField
                    variant="outlined"
                    placeholder="Your e-mail"
                    inputProps={{ "aria-label": "Get newsletter" }}
                    InputProps={{
                      className: classes.whiteBg,
                    }}
                    fullWidth
                    required
                  />
                  <Button
                    className={classes.newsletterBtn}
                    variant="outlined"
                    type="submit"
                  >
                    Send me the newsletter!
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" paragraph className="text-white">
              Contact
            </Typography>
            <Box display="flex">
              <IconButton className={classes.socialIcon} aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.socialIcon} aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.socialIcon} aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              paragraph
              align="center"
              className="text-white"
            >
              &copy; {new Date().getFullYear()} eCommerce
            </Typography>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
  newsletterBtn: {
    color: "#fff",
    borderColor: "#fff",
    width: "100%",
    marginTop: "1em",
  },
  socialIcon: {
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

const StyledButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  width: 100%;
  margin-top: 1em;
`;

export default Footer;
