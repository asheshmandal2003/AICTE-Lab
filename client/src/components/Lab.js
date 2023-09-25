import React from "react";
import { Box, Card, Typography } from "@mui/material";
// import "./glassmorphism.css";
import { useNavigate } from "react-router-dom";

function Lab({ imageLink, labName, url }) {
  const navigate = useNavigate();
  return (
    <Card
      className="glass"
      component="div"
      onClick={() => navigate(url)}
      sx={{
        maxWidth: 400,
        height: 200,
        m: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${imageLink})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ p: 2, width: "100%", textAlign: "center" }}>
        <Typography>{labName}</Typography>
      </Box>
    </Card>
  );
}

export default Lab;
