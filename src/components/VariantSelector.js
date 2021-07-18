import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const VariantSelector = ({ variants, variantIndex, setVariantIndex }) => {
  const theme = useTheme();
  const images = variants.map((variant) => variant.image);
  return (
    <Grid container spacing={1}>
      {images.map((image, index) => {
        return (
          <Grid item key={index} xs={2} onClick={() => setVariantIndex(index)}>
            <ImageGalleryContainer theme={theme}>
              <img
                className={
                  index === variantIndex ? "gallery active" : "gallery"
                }
                src={image.file.url}
                alt={image.title}
              />
            </ImageGalleryContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};

const ImageGalleryContainer = styled.div`
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

export default VariantSelector;
