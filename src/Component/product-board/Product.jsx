import React from "react";

const Product = ({
  proDiscountStyle,
  proDiscount,
  proImg,
  proDescription,
  proPrice,
  proStrikePriceStyle,
  proStrikePrice,
}) => {
  return (
    <div className="product overflow-hidden cursor-pointer hover:scale-[1.01] rounded-md flex flex-col min-w-[42%] md:min-w-[24.3%] lg:min-w-[16.1%] h-[13rem] sm:min-h-[16.2rem] smlg:h-[19.8rem] lg:h-[16.8rem] relative gap-2">
      <p
        style={proDiscountStyle}
        className=" absolute top-1 md:top-2 right-1 md:right-2 z-[1] px-[.2rem] md:px-[.32rem] py-[.13rem] text-[--discount-txt-color] rounded-[0.2rem] text-[.65rem] md:text-[.85rem] font-normal bg-[--discount-bg-color]"
      >
        {proDiscount}
      </p>

      <div className="w-full h-[75%]">
        <img src={proImg} alt="P1 Img" className=" w-full h-full" />
      </div>

      <li className="flex-col place-items-start text-[0.9rem] font-light px-2">
        <p className=" mb-2 overflow-hidden whitespace-nowrap text-ellipsis w-full">
          {proDescription}
        </p>

        <p className="font-medium text-[1rem] w-full whitespace-nowrap text-ellipsis overflow-hidden leading-3">{proPrice}</p>

        <strike style={proStrikePriceStyle} className=" h-[1rem] text-[0.75rem] my-2">
          {proStrikePrice}
        </strike>
      </li>
    </div>
  );
};

export default Product;
