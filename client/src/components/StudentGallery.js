import { ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const itemdata = [
  {
    id: 1,
    img: "IMG-20230811-WA0005.jpg",
  },
  {
    id: 2,
    img: "IMG-20230811-WA0008.jpg",
  },
  {
    id: 3,
    img: "IMG-20230811-WA0009.jpg",
  },
];

function StudentGallery() {
  const media = useMediaQuery("(min-width:800px)");
  return (
    <ImageList sx={{ width: media ? 1000 : 500, mb: 5 }} cols={media ? 3 : 1}>
      {itemdata.map((item) => (
        <ImageListItem key={item.id}>
          <img src={`/images/${item.img}`} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StudentGallery;
