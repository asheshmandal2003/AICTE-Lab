import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Lab({ imageLink, labName, url }) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  return (
    <Card
      onMouseOver={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
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
        cursor: "pointer",
      }}
    >
      {display && (
        <Box sx={{ p: 2, width: "100%", textAlign: "center", bgcolor: "#fff" }}>
          <Typography>{labName}</Typography>
        </Box>
      )}
    </Card>
  );
}

export default Lab;
