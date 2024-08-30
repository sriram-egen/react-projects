import React from "react";
import ImageSlider from "../components/image-slider";

function ImageSliderPage() {
  return (
    <div>
      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit="10" />
    </div>
  );
}

export default ImageSliderPage;
