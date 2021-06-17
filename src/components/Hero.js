import React from "react";
import styled from "styled-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Container,
  Button,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
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

        <Button
          variant="contained"
          color="secondary"
          className={classes.heroButton}
          component={Link}
          to="/products"
        >
          see products
        </Button>
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

const HeroImage = styled.img`
  &:after {
    content: "";

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 0;
  }
`;

export default Hero;