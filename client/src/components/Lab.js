import React from "react";
import { Box, Card, Typography } from "@mui/material";
import "./glassmorphism.css";

function Lab({ imageLink, labName }) {
  return (
    <Card
      className="glass"
      sx={{
        maxWidth: 400,
        height: 200,
        m: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>{labName}</Typography>
    </Card>
  );
}

export default Lab;
