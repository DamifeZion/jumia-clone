import React from "react";
import jumiaLogo from "../../assets/jumia-logo.png";
import { GrMenu } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

const iStyle = {
  fontSize: "1.3rem",
  cursor: "pointer",
};

const TopNavbarMobile = ({handleShowMenu}) => {

  return (
    <div className="flex flex-col border border-red-600 bg-[--secondary-bg-color] py-4 gap-5">
      <ul className="col1 flex items-center justify-between px-[--sm-px]">
        <li className="flex items-center gap-5">
          <i style={iStyle} onClick={handleShowMenu}>
            <GrMenu />
          </i>
          <img src={jumiaLogo} alt="Jumia Logo" className="w-[7rem]" />
        </li>

        <li className="flex items-center gap-7">
          <i style={iStyle}>
            <FaRegUser />
          </i>
          <i style={iStyle}>
            <BsCart3 />
          </i>
        </li>
      </ul>

      <ul className="col2  px-[0.5rem] relative">
        <input
          type="text"
          placeholder="Search products, brands and categories"
          className="border rounded-3xl text-[1rem] text-[black] placeholder:text-[--text-color1] border-[--text-color1] outline-none text-ellipsis   w-full h-[2.3rem] pl-10"
        />

        <i className="text-[1.2rem] text-[black]] absolute left-5 top-1/2 -translate-y-1/2">
          <ImSearch />
        </i>
      </ul>


    </div>
  );
};

export default TopNavbarMobile;
