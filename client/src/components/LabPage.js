import { Box, Typography } from "@mui/material";
import LabDetails from "./LabDetails";
import StudentGallery from "./StudentGallery";

function LabPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <LabDetails />
      <Typography variant="h4" mb={4} color="primary">
        Student Gallery
      </Typography>
      <StudentGallery />
    </Box>
  );
}

export default LabPage;
