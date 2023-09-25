import { Box, Typography } from "@mui/material";
import React from "react";
import Lab from "./Lab";
import useMediaQuery from "@mui/material/useMediaQuery";
import Thumbnail from "./Thumbnail";

function Labs() {
  const media = useMediaQuery("(min-width:800px)");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Thumbnail />
      <Typography variant="h4" mt={5} color="primary">
        Our Labs
      </Typography>
      <Box
        sx={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: `repeat(${media ? 2 : 1}, 1fr)`,
        }}
      >
        <Lab
          imageLink={"/images/29626.jpg"}
          labName="3D Printer Lab"
          url={"/labpage"}
        />
        <Lab
          imageLink={"/images/wood-router.jpg"}
          labName="CNC Wood Router Lab"
        />
        <Lab imageLink={"/images/18754.jpg"} labName="IOT Lab" />
        <Lab
          imageLink={"/images/laser-cutting.jpg"}
          labName="Laser Cutting Lab"
        />
        <Lab imageLink={"/images/3528486.jpg"} labName="Prototypes Lab" />
        <Lab imageLink={"/images/vinyl.jpg"} labName="Vinyl Cutter Lab" />
      </Box>
    </Box>
  );
}

export default Labs;
