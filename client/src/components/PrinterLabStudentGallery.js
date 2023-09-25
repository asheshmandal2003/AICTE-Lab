import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageList, ImageListItem } from '@mui/material';


const itemdata = [
    {
        id: 1,
        img: "633b3599520c7046f8244ad6-r-qidi-technology-i-fast-3d-printer.jpg",
    },
    {
        id: 2,
        img: "IMG-20230811-WA0007.jpg",
    },
    {
        id: 3,
        img: "IMG-20230811-WA0009.jpg",
    },
    {
        id: 4,
        img: "IMG-20230811-WA00015.jpg",
    },
];



function PrinterLabStudentGallery() {
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
export default PrinterLabStudentGallery