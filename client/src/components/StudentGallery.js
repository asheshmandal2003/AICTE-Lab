import { ImageList, ImageListItem } from "@mui/material";

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
  return (
    <ImageList sx={{ width: 1000, mb: 5 }} cols={3}>
      {itemdata.map((item) => (
        <ImageListItem key={item.id}>
          <img src={`/images/${item.img}`} alt="image" loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StudentGallery;
