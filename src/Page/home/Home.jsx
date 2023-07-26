import React from "react";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  TopLogos,
  TopNavbarPC,
  TopNavbarMobile,
  AsidePC,
  AsideMobile,
  HeroPC,
  HeroMobile,
} from "../../Component/export";

const Home = () => {
  const theme = useTheme();
  const isXLarge = useMediaQuery(theme.breakpoints.up("1120"));
  const isLarge = useMediaQuery(theme.breakpoints.up("1025"));
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const [toggleMenu, setToggleMenu] = useState(false)

  function handleShowMenu() {
    setToggleMenu(prev => !prev);
  }

  function handleHideMenu() {
    setToggleMenu(prev => !prev)
  }

  function heroRender() {
    return isXLarge ? (
      <div className="w-[82%]">
        <HeroPC />
      </div>
    ) : (
      <div className="w-[100%] bg-[--secondary-bg-color]">
        <HeroMobile />
      </div>
    );
  }

  function asideRender() {
    return isLarge ? (
      <div className="hidden lg:block lg:w-[18%]">
        <AsidePC />
      </div>
    ) : (
      toggleMenu && <div className=" absolute z-[100] bg-[--secondary-bg-color] overflow-hidden top-0 left-0 w-[88%] smlg:w-[85%] h-full ">
      <AsideMobile handleHideMenu={handleHideMenu} />
    </div>
    );
  }

  return (
    <div className="Home">
      <div>{isLarge && <TopLogos />}</div>

      <div>{isSmall ? <TopNavbarMobile handleShowMenu={handleShowMenu} /> : <TopNavbarPC />}</div>

      <section className="max-w-inline lg:px-[--lg-px] mt-4 gap-4 justify-between flex border border-red-500 w-full overflow-hidden">
        {asideRender()}
        {heroRender()}
      </section>
    </div>
  );
};

export default Home;
