import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { PiCaretRightBold } from "react-icons/pi";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { LuApple, LuCircleEllipsis, LuGamepad2 } from "react-icons/lu";
import { FaRegSmileBeam } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import {
  PiCookingPot,
  PiTelevisionDuotone,
  PiTShirt,
  PiBaby,
  PiDesktop,
} from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { CiDumbbell } from "react-icons/ci";

import jumiaLogo from "../../assets/jumia-logo.png";
import jumiaStar from "../../assets/jumia-star.png";
import AsideChipPC from "./AsideChipPC";
import { asideChipData } from "../../Page/home/HomeData";
import AsideChipMobile from "./AsideChipMobile";

const asideChipStyle = {
  color: "#000",

  paddingBlock: "1rem",
  paddingInline: "1rem",
};

const borderBlockStyle = {
  borderBlock: "2px solid var(--bg-color)",
};
const borderBottomStyle = {
  borderBottom: "2px solid var(--bg-color)",
};

const headingStyle = {
  placeItems: "center",
  placeContent: "space-between",
  color: "var(--cta-color)",
  fontWeight: "700",
  letterSpacing: "0.05rem",
  fontSize: "0.93rem",

  paddingInline: "1rem",
  paddingBlock: "0.8rem",
};

const iconStyle = {
  color: "var(--text-color3)",
  fontSize: "0.93rem",
  textDecoration: "underline",
  fontWeight: "400",
  fontStyle: "normal",

  marginRight: "0.8rem",
};

const styleDiv = {
  gap: "0.75rem",
  paddingInline: "1rem",
  paddingBlock: "0.85rem",
};

const styleI = {
  fontSize: "1.6rem",
  color: "var(--text-color3)",
};

const styleH4 = {
  fontSize: "1.18rem",
  color: "var(--text-color3)",
  lineHeight: "1.5rem",
};

const asideData = ({ id, icon, txt }) => {
  const icons = {
    LuApple: <LuApple />,
    FaRegSmileBeam: <FaRegSmileBeam />,
    GoHome: <GoHome />,
    PiCookingPot: <PiCookingPot />,
    BsPhone: <BsPhone />,
    PiDesktop: <PiDesktop />,
    PiTelevisionDuotone: <PiTelevisionDuotone />,
    PiTShirt: <PiTShirt />,
    PiBaby: <PiBaby />,
    LuGamepad2: <LuGamepad2 />,
    CiDumbbell: <CiDumbbell />,
    LuCircleEllipsis: <LuCircleEllipsis />,
  };

  return (
    <AsideChipPC
      key={id}
      styleDiv={styleDiv}
      styleI={styleI}
      styleH4={styleH4}
      icon={icons[icon]}
      txt={txt}
    />
  );
};

const AsideMobile = ({handleHideMenu}) => {
  return (
    <ul className=" w-full h-full ">
      <a className="py-4 px-4 w-full gap-3">
        <i className=" text-[2.3rem] " onClick={handleHideMenu}>
          <RiCloseFill />
        </i>

        <img
          src={jumiaLogo}
          alt="Jumia Logo"
          className=" xsm:w-[7.8rem] md:w-[9rem]"
        />
      </a>

      <AsideChipMobile
        icon={<LuCircleEllipsis />}
        txt={"Live Help"}
        style={{ ...asideChipStyle, ...borderBlockStyle }}
      />

      <li style={headingStyle}>
        <h4>MY JUMIA ACCOUNT</h4>

        <i style={iconStyle}>
          <PiCaretRightBold />
        </i>
      </li>

      <AsideChipMobile
        icon={<AiOutlineShop />}
        txt={"Orders"}
        style={{ ...asideChipStyle }}
      />

      <AsideChipMobile
        icon={<MdOutlineRateReview />}
        txt={"Pending Reviews"}
        style={{ ...asideChipStyle }}
      />

      <AsideChipMobile
        icon={<RiCouponLine />}
        txt={"Voucher"}
        style={{ ...asideChipStyle }}
      />

      <AsideChipMobile
        icon={<FiHeart />}
        txt={"Saved Items"}
        style={{ ...asideChipStyle, ...borderBottomStyle }}
      />

      <li style={{ ...headingStyle }}>
        <h4>Our Categories</h4>

        <i style={iconStyle}>See All</i>
      </li>

      <div>{asideChipData.map(asideData)}</div>

      <li style={{ ...headingStyle, borderTop: "2px solid var(--bg-color)" }}>
        <h4>Our Services</h4>

        <i style={iconStyle}>See All</i>
      </li>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          J-Force
        </h4>
      </a>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          Pay Airtime & Bills
        </h4>
      </a>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          Pay Electricity Bills
        </h4>
      </a>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          Pay Internet Bills
        </h4>
      </a>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          Buy Data
        </h4>
      </a>

      <a className=" py-4 px-4 gap-3 ">
        <img src={jumiaStar} alt="Jumia" className=" w-[1.55rem]" />

        <h4 className=" leading-[1.5rem] text-[1.18rem] text-[--text-color3]">
          Jumia Food
        </h4>
      </a>

      <p
        style={{ ...styleH4, borderTop: "2px solid var(--bg-color)" }}
        className=" py-4 px-4"
      >
        Sell On Jumia
      </p>
      <p style={styleH4} className=" py-4 px-4">
        Contact Us
      </p>
      <p style={styleH4} className=" py-4 px-4">
        Help Center
      </p>
    </ul>
  );
};

export default AsideMobile;
