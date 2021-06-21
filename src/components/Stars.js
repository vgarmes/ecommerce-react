import React from "react";
import {
  StarRounded,
  StarHalfRounded,
  StarBorderRounded,
} from "@material-ui/icons";
import { Box, Typography } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const half = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <StarRounded style={{ color: yellow[800] }} />
        ) : stars >= half ? (
          <StarHalfRounded style={{ color: yellow[800] }} />
        ) : (
          <StarBorderRounded style={{ color: yellow[800] }} />
        )}
      </span>
    );
  });
  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={1} className="stars">
        {tempStars}
      </Box>
      <Typography variant="body2">({reviews} customer reviews)</Typography>
    </Box>
  );
};

export default Stars;
