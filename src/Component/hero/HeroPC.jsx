import { useState, useEffect, useCallback } from "react";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";
import slider0 from "../../assets/homepage-slider-1.png";
import slider1 from "../../assets/homepage-slider-2.png";
import slider2 from "../../assets/homepage-slider-3.jpg";
import slider3 from "../../assets/homepage-slider-4.jpg";
import slider4 from "../../assets/homepage-slider-5.png";
import slider5 from "../../assets/homepage-slider-6.png";
import slider6 from "../../assets/homepage-slider-7.jpg";

import officialStore from "../../assets/official-store.jpg";
import jForce from "../../assets/JForce.png";
import { GoDotFill } from "react-icons/go";

const HeroPC = () => {
  const allImage = [
    slider0,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ];

  const [mainImage, setMainImage] = useState(0);

  const nextImage = useCallback(() => {
    setMainImage((prevIndex) => (prevIndex + 1) % allImage.length);
  }, [allImage.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const imageData = () => {
    if (mainImage === 0) {
      return <img src={slider0} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 1) {
      return <img src={slider1} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 2) {
      return <img src={slider2} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 3) {
      return <img src={slider3} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 4) {
      return <img src={slider4} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 5) {
      return <img src={slider5} alt={`Slider ${mainImage}`} />;
    } else if (mainImage === 6) {
      return <img src={slider6} alt={`Slider ${mainImage}`} />;
    }
  };

  const handlePrevious = () => {
    if (mainImage <= 0) {
      setMainImage((prev) => prev + 6);
    } else {
      setMainImage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (mainImage >= 6) {
      setMainImage(0);
    } else {
      setMainImage((prev) => prev + 1);
    }
  };

  const bannerRadio = () => {
    return (
      <li className="absolute bottom-[0.1rem] left-1/2 -translate-x-1/2 text-[--text-color1] text-[1.1rem]">
        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 0 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color] "
          style={{
            color: mainImage === 1 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 2 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 3 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 4 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 5 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>

        <i
          className=" hover:text-[--cta-color]"
          style={{
            color: mainImage === 6 ? "var(--cta-color)" : "var(--text-color1",
          }}
        >
          <GoDotFill />
        </i>
      </li>
    );
  };

  return (
    <section className="max-w-inline w-full">
      <div className="flex justify-between overflow-hidden  w-full rounded-[--card-radius1] gap-4">
        <div className="col1 w-[78%] overflow-hidden cursor-pointer relative">
          <a className=" relative">
            {imageData()}
            {bannerRadio()}
          </a>

          <a className="absolute left-0 top-1/2 -translate-y-1/2 p-16 pl-4 group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-[30px] h-[30px] rounded-full z-[-1] group-hover:opacity-100 opacity-0 transition-opacity duration-150" />

            <img
              src={chevronLeft}
              onClick={handlePrevious}
              className="w-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            />
          </a>

          <a className="absolute right-0 top-1/2 -translate-y-1/2 p-16 pr-4 group">
            <span className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-[30px] h-[30px] rounded-full z-[-1] group-hover:opacity-100 opacity-0 transition-opacity duration-150" />

            <img
              src={chevronRight}
              onClick={handleNext}
              className="w-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            />
          </a>
        </div>

        <div className="col2 flex flex-col justify-between w-[22%] gap-4">
          <img
            src={officialStore}
            alt="Official Store"
            className="flex-1 rounded-[--card-radius1] cursor-pointer"
          />
          <img
            src={jForce}
            alt="Official Store"
            className=" flex-1 rounded-[--card-radius1] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPC;
