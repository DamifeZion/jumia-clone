import React from "react";

const ProductCategory = ({img, txt}) => {
  return (
    <div className="product-category mt-2 flex flex-col rounded-t-md rounded-b-sm h-[6rem] w-[23.5%] md:h-[12.2rem] smlg:h-[14.2rem] md:w-[24.3%] xl:w-[16.1%] bg-[--bg-color] group overflow-hidden lg:hover:scale-[1.01] cursor-pointer">
      <div className="w-full h-full rounded-b-md group-hover:rounded-b-none overflow-hidden">
        <img
          src={img}
          alt={`Shop ${txt}`}
          className="w-full h-full object-contain "
        />
      </div>

      <p className=" w-full py-2 px-2 leading-tight font-[400] xl:py-[0.75rem] bg-[--secondary-bg-color] text-center overflow-hidden text-[0.65rem] md:text-[0.75rem] xl:text-[0.85rem] md:font-[300] rounded-b-md">
        {txt}
      </p>
    </div>
  );
};

export default ProductCategory;
