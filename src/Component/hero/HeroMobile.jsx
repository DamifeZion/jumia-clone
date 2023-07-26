import { useState, useEffect, useCallback } from "react";
import React from "react";
import slider0 from "../../assets/homepage-slider-1.png";
import slider1 from "../../assets/homepage-slider-2.png";
import slider2 from "../../assets/homepage-slider-3.jpg";
import slider3 from "../../assets/homepage-slider-4.jpg";
import slider4 from "../../assets/homepage-slider-5.png";
import slider5 from "../../assets/homepage-slider-6.png";
import slider6 from "../../assets/homepage-slider-7.jpg";

const heroImgStyle = {

}

const HeroMobile = () => {
  const allImage = [
    slider0,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ];

  const imageElements = allImage.map((image, index) => (
    <img key={index} src={image} alt={`Slider ${index}`} className=" rounded-sm"/>
  ))

  const [mainImage, setMainImage] = useState(0);

  



  return (
  <section className="max-w-inline w-full overflow-hidden">
    <div className="overflow-x flex w-full xsm:h-[170px] sm:h-[190px] md:h-[340px] smlg:h-[450px] gap-2 p-2 pl-0 border border-red-600">

    {imageElements}

    </div>
  </section>
  
  );
};

export default HeroMobile;
