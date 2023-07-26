import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { BsSuitHeart, BsChatLeftDots } from "react-icons/bs";

const HelpDropdown = () => {

  return (
    <div className="topNav-Dropdown-shadow  bg-[--secondary-bg-color] overflow-x-hidden rounded-md flex flex-col  w-full">
      <h4 className=" helpDropdown">
        Help Center
      </h4>

      <h4 className=" helpDropdown">
        Place & track order
      </h4>

      <h4 className=" helpDropdown">
        Order Cancellation
      </h4>

      <h4 className=" helpDropdown">
        Returns & Refunds
      </h4>

      <h4 className=" helpDropdown border-b-2 border-[--bg-color] ">
        Payment & Jumia account
      </h4>

      <button className="normal text-[.9rem] flex items-center justify-center  gap-3 mx-4 my-4">
        {" "}
        <span className=" text-[1.3rem]">
          <BsChatLeftDots />
        </span>{" "}
        LIVE CHAT
      </button>
    </div>
  );
};

export default HelpDropdown;
