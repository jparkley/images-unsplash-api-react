import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {

  const imagesJsx = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return (
    <div className="container box">
    <div className="image-list">
      {imagesJsx}
    </div>
    </div>
  );
}

export default ImageList;
