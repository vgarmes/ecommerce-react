import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
