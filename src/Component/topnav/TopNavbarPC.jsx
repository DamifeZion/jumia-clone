import React from "react";
import jumiaLogo from "../../assets/jumia-logo.png";
import { FaRegUser } from "react-icons/fa";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { ImCancelCircle } from "react-icons/im";
import AccountDropdown from "./AccountDropdown";
import HelpDropdown from "./HelpDropdown";
import { useState } from "react";

const iStyle = {
  fontSize: "0.8rem",
  marginTop: "0.2rem",
  placeSelf: "center",
};

const aStyle = {
  display: "flex",
  placeItems: "center",
  cursor: "pointer",
  borderRadius: "0.375rem",
  userSelect: "none",
  position: "relative",

  paddingInline: "0.4rem",
  paddingBlock: "0.75rem",
  gap: "0.4rem",
};

const TopNavbarPC = () => {
  const [toggle, setToggle] = useState({
    account: false,
    help: false,
  });

  const accountActive = {
    background: toggle.account && '#D4D4D6',
  };

  const helpActive = {
    background: toggle.help && '#D4D4D6',
  };

  const handleAccountClick = () => {
    if (toggle.help === true) {
      setToggle((prev) => ({ ...prev, help: !prev.help }));
    }
    setToggle((prev) => ({ ...prev, account: !prev.account }));
  };

  const handleHelpClick = () => {
    if (toggle.account === true) {
      setToggle((prev) => ({ ...prev, account: !prev.account }));
    }
    setToggle((prev) => ({ ...prev, help: !prev.help }));
  };

  const [inputValue, setInputValue] = useState({
    search: "",
  });

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputValue((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSearchCancel = () => {
    if (inputValue.search.length > 1)
      setInputValue((prev) => ({ ...prev, search: "" }));
  };

  return (
    <div className="component-shadow bg-[var(--secondary-bg-color)]">
      <section className="max-w-inline flex items-center  w-full h-[4.5rem] px-[var(--lg-px)]">
        <img
          src={jumiaLogo}
          alt="Jumia Logo"
          className=" w-[8.5rem] mr-[5.5rem]"
        />

        <div className="input flex items-center relative  gap-2 w-full">
          <input
            type="text"
            onChange={handleSearchChange}
            value={inputValue.search}
            placeholder="Search products, brands and categories"
            className="border rounded-md text-[1rem] text-[black] placeholder:text-[--text-color1] border-[--text-color1] outline-none   w-[59%] h-[2.6rem] pl-10"
          />
          <button className="normal text-[0.85rem]">SEARCH</button>
          <span className="text-[1.2rem] text-[--text-color1] absolute left-3">
            <ImSearch />
          </span>
          <span
            onClick={handleSearchCancel}
            className="text-[1.2rem] text-[--text-color1] absolute hidden lg:block lg:left-[530px] cursor-pointer"
          >
            {inputValue.search && <ImCancelCircle />}
          </span>

          <div className="profile flex">
            <a
              style={{ ...aStyle, ...accountActive }}
              onClick={handleAccountClick}
            >
              <span className="topNavbar">
                <FaRegUser />
              </span>
              <h4 className="topNavbar">Account</h4>
              <i style={iStyle}>
                {!toggle.account ? <PiCaretDownBold /> : <PiCaretUpBold />}
              </i>

              <div className=" absolute z-50 -bottom-[13.6rem] left-[50%] -translate-x-2/4 w-[215px]">
                {toggle.account && <AccountDropdown />}
              </div>
            </a>

            <a
              style={{ ...aStyle, ...helpActive }}
              className=" active:bg-[--nav-hover-bg]"
              onClick={handleHelpClick}
            >
              <span className="topNavbar">
                <BiHelpCircle />
              </span>
              <h4 className="topNavbar">Help</h4>
              <i style={iStyle}>
                {!toggle.help ? <PiCaretDownBold /> : <PiCaretUpBold />}
              </i>

              <div className=" absolute z-50 -bottom-[18.2rem] left-[50%] -translate-x-2/4 w-[210px]">
                {toggle.help && <HelpDropdown />}
              </div>
            </a>

            <a style={aStyle} className=" hover:text-[--cta-color]">
              <span className="topNavbar">
                <BsCart3 />
              </span>

              <h4 className="topNavbar"> Cart</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopNavbarPC;
