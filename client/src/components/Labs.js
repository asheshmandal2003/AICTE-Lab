import { Box } from "@mui/material";
import React from "react";
import Lab from "./Lab";

function Labs() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Lab imageLink={"/images/3D-printer.avif"} labName="3D Printer Lab" />
        <Lab
          imageLink={"/images/CNC-wood-router.avif"}
          labName="CNC Wood Router Lab"
        />
        <Lab imageLink={"/images/IOT.avif"} labName="IOT Lab" />
        <Lab
          imageLink={"/images/laser-cutting.jpg"}
          labName="Laser Cutting Lab"
        />
        <Lab imageLink={"/images/prototype.avif"} labName="Prototypes Lab" />
        <Lab
          imageLink={"/images/vinyl-cutter.avif"}
          labName="Vinyl Cutter Lab"
        />
      </Box>
    </Box>
  );
}

export default Labs;
