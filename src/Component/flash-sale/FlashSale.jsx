import React from "react";
import { AiTwotoneTag } from "react-icons/ai";
import { PiCaretRightBold } from "react-icons/pi";

const FlashSale = () => {
  return (
    <div className=" w-full mt-2 md:mt-0 lg:mt-3">
      <div className=" flex place-items-center place-content-between py-1 md:py-2 lg:py-[0.6rem] bg-[--danger-color] rounded-t-none lg:rounded-t-md text-[0.8rem] lg:text-[1.7em] text-[--secondary-bg-color] px-[--sm-px] lg:px-4">
        <div className=" flex flex-col lg:flex-row place-items-start lg:place-items-center place-content-between w-[75%] lg:w-[60%]">
          <div className=" flex gap-2 place-items-center font-medium">
            <i className="text-[2rem] -rotate-12 text-[--cta-color]">
              <AiTwotoneTag />
            </i>

            <a className=" flex-col place-items-start w-full">
              <p>Flash Sales</p>
              <p className=" lg:hidden">
                Time Left: <span className=" font-bold">17h : 34m : 48s</span>
              </p>
            </a>
          </div>

          <p className=" hidden lg:block">
            Time Left: <span className=" font-bold">17h : 34m : 48s</span>
          </p>
        </div>

        <a className=" text-[0.8rem] gap-1 lg:text-[1rem] place-self-start lg:place-self-center">
          SEE ALL
          <i className=" mb-[0.3rem] text-[0.92rem] hidden lg:block">
            <PiCaretRightBold />
          </i>
        </a>
      </div>
    </div>
  );
};

export default FlashSale;
