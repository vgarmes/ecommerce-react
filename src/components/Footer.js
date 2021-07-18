import React from "react";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  isWidthUp,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@material-ui/icons";

const Footer = (props) => {
  const classes = useStyles();

  const { width } = props;
  return (
    <Container component="footer" className={classes.footerInner}>
      <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
        <Grid item xs={12} md={6}>
          <form>
            <Box display="flex" flexDirection="column">
              <Box mb={1}>
                <form action="https://formspree.io/f/xayajbar" method="POST">
                  <TextField
                    type="email"
                    name="_replyto"
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
                </form>
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
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    marginTop: theme.spacing(4),
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
    padding: 0,
    marginRight: "1em",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

export default Footer;
