import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import image3 from "../images/img3.jpg"
import image4 from "../images/img4.jpg"
import image5 from "../images/img5.jpg"
import image6 from "../images/img6.jpg"
import image7 from "../images/img7.jpg"
import image8 from "../images/img8.jpg"
import image9 from "../images/img9.jpg"
import image10 from "../images/img10.jpg"
import image11 from "../images/img11.jpg"
import image12 from "../images/img12.jpg"


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageCollage = () => {
  return (
    <ImageList
      sx={{ width: 300, height: 325 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: 'Burger',
  },
  {
    img: image3,
    title: 'Camera',
  },
  {
    img: image4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: image5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: image6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: image7,
    title: 'Basketball',
  },
  {
    img: image8,
    title: 'Fern',
  },
  {
    img: image9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: image10,
    title: 'Tomato basil',
  },
  {
    img: image11,
    title: 'Sea star',
  },
  {
    img: image12,
    title: 'Bike',
    cols: 2,
  },
];

export default ImageCollage;