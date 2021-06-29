import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const theme = useTheme();
  const [mainIndex, setMainIndex] = useState(0);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ImageContainer theme={theme}>
          <img
            className="main"
            src={images[mainIndex].file.url}
            alt={images[mainIndex].title}
          />
        </ImageContainer>
      </Grid>
      {images.map((image, index) => {
        return (
          <Grid item key={index} xs={2} onClick={() => setMainIndex(index)}>
            <ImageContainer theme={theme}>
              <img
                className={index === mainIndex ? "gallery active" : "gallery"}
                src={image.file.url}
                alt={image.title}
              />
            </ImageContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};

const ImageContainer = styled.div`
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .active {
    border: 2px solid ${(props) => props.theme.palette.primary.light};
  }
  .main {
    height: 400px;
  }

  .gallery {
    height: 60px;
  }
`;

export default ProductImages;
