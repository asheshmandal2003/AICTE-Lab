import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LabDetails() {
  return (
    <Card sx={{ maxWidth: 600, m: 4 }}>
      <CardMedia
        component="img"
        width="50%"
        height={300}
        image="/images/3D-printer.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          3D Printer Lab
        </Typography>
        <Typography variant="body2" color="text.secondary">
          3D printing or additive manufacturing is a process of making three
          dimensional solid objects from a digital file. The creation of a 3D
          printed object is achieved using additive processes. In an additive
          process an object is created by laying down successive layers of
          material until the object is created. Each of these layers can be seen
          as a thinly sliced cross-section of the object.
        </Typography>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default LabDetails;
