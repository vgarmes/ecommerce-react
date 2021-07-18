import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, isWidthUp } from "@material-ui/core";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/about.jpg";

const Hero = (props) => {
  const { width } = props;
  const classes = useStyles();
  return (
    <HeroSection>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="lg"
        height="100%"
      >
        <Typography variant={isWidthUp("lg", width) ? "h1" : "h3"}>
          eCommerce
        </Typography>
        <Typography variant={isWidthUp("lg", width) ? "h3" : "h6"}>
          The best webshop for sports clothes
        </Typography>

        <Link to="/products">
          <Button
            variant="contained"
            color="primary"
            className={classes.heroButton}
          >
            see products
          </Button>
        </Link>
      </Box>

      <ImageContainer>
        <img src={heroImg} alt="model" />
      </ImageContainer>
    </HeroSection>
  );
};

const useStyles = makeStyles((theme) => ({
  heroButton: {
    marginTop: "3em",
  },
}));

const HeroSection = styled.section`
  position: relative;
  height: 75vh;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default Hero;
