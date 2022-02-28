import React from 'react';

const ImageList = (props) => {
    
    const images = props.images.map(image => {
        return <img key={image.id} src={image.urls.full} alt={image.description} width={200} height={200} />
    })

    return (
        <div style={{border: "1px solid red"}}>
           {images}
        </div>
    );
};

export default ImageList;