import React from "react";
import Product from "./Product";
import { PiCaretRightBold } from "react-icons/pi";

const ProductBoard = ({ pbTitle, pbTitleStyle, seeAll, productItems }) => {
  const more = {
    seeAll: seeAll,
    caret: <PiCaretRightBold />,

    //Below is to make caret not show if there is no seeAll
    display: !seeAll && "none",
  };

  return (
    <div className="component-shadow flex flex-col rounded-sm bg-[--secondary-bg-color] pb-[0.15rem]">
      <li style={pbTitleStyle} className=" justify-between px-4 text-[1.3rem] mb-[0.3rem] font-medium py-2">
        <h3>{pbTitle}</h3>

        <a className="cursor-pointer font-medium gap-1 lg:text-[1rem] place-self-center lg:place-self-center">
          <p className="text-[.9rem] uppercase">{more.seeAll}</p>
          <i
            style={more}
            className="mb-[0.1rem] text-[0.85rem] hidden lg:block"
          >
            {more.caret}
          </i>
        </a>
      </li>

      <div className="overflow-x px-[--sm-px] lg:px-2 py-2 w-full flex gap-2">
        {productItems.map((item) => (
          <Product
            key={item.id}
            proDiscountStyle={{ display: !item.proDiscount && "none" }}
            proDiscount={item.proDiscount}
            proImg={item.proImg}
            proDescription={item.proDescription}
            proPrice={item.proPrice}
            proStrikePriceStyle={{ opacity: !item.proStrikePrice && "0" }}
            proStrikePrice={item.proStrikePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBoard;
