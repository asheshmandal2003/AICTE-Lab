import React from 'react'
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageList, ImageListItem } from '@mui/material';


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
        img: "IMG-20230811-WA00010.jpg",
    },
    {
        id: 4,
        img: "IMG-20230811-WA00011.jpg",
    },
    {
        id: 5,
        img: "IMG-20230811-WA00012.jpg",
    },
    {
        id: 6,
        img: "IMG-20230811-WA00022.jpg",
    },
];



function IotLabStudentGallery() {
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

export default IotLabStudentGallery