import React from "react";
import { Card, Typography } from "@mui/material";
import "./glassmorphism.css";
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
      }}
    >
      <Typography>{labName}</Typography>
    </Card>
  );
}

export default Lab;
