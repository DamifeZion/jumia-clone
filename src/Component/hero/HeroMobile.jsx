import { useState, useEffect, useCallback } from "react";
import React from "react";

const heroImgStyle = {};

const HeroMobile = ({ allImage }) => {
  const imageElements = allImage.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Slider ${index}`}
      className="rounded-sm w-full h-full object-center "
    />
  ));

  return (
    <section className="max-w-inline w-full overflow-hidden">
      <div className="pl-[--sm-px] overflow-x flex h-[133px] sm:h-[166px] md:h-[340px] smlg:h-[450px] gap-2">
        {imageElements}
      </div>
    </section>
  );
};

export default HeroMobile;
