import React from "react";
import { Typography } from "@material-ui/core";

const Error = () => {
  return (
    <div>
      <Typography variant="h4" align="center" paragraph>
        Error!
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Products could not be loaded
      </Typography>
    </div>
  );
};

export default Error;
