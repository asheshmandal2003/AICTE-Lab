import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Thumbnail() {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/JISCE.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",

        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <Typography variant="h3" mb={2}>
        Welcome To JISCE AICTE Lab
      </Typography>
      <Typography variant="h5" mb={2}>
        The World of Innovation
      </Typography>
      <Box>
        <Button variant="contained">Labs</Button>
      </Box>
    </Box>
  );
}

export default Thumbnail;
