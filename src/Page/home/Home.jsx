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
  ProductCategory,
} from "../../Component/export";
import {
  productCategoryDataPC,
  productCategoryDataMobile,
} from "../../Page/home/HomeData";

const Home = () => {
  const theme = useTheme();
  const isXLarge = useMediaQuery(theme.breakpoints.up("1200"));
  const isLarge = useMediaQuery(theme.breakpoints.up("1025"));
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const [toggleMenu, setToggleMenu] = useState(false);

  function handleShowMenu() {
    setToggleMenu((prev) => !prev);
  }

  function handleHideMenu() {
    setToggleMenu((prev) => !prev);
  }

  function topNavRender() {
    return isSmall ? (
      <div className="sticky top-0 left-0 z-50">
        <TopNavbarMobile handleShowMenu={handleShowMenu} />
      </div>
    ) : (
      <div>
        <TopNavbarPC />
      </div>
    );
  }

  function callToOrderRender() {
    return (
      isSmall && (
        <p className=" text-[1rem] py-1 text-center bg-[--limited-stock-color] ">
          CALL TO ORDER: 0700 600 0000
        </p>
      )
    );
  }

  function asideRender() {
    return isXLarge ? (
      <div className="hidden lg:block lg:w-[18%]">
        <AsidePC />
      </div>
    ) : (
      toggleMenu && (
        <div className=" fixed top-0 left-0 z-[100] bg-[--secondary-bg-color] overflow-hidden w-[86%] smlg:w-[85%] h-full ">
          <div className=" bg-[--secondary-bg-color]">
            <AsideMobile handleHideMenu={handleHideMenu} />
          </div>

          <span
            onClick={handleHideMenu}
            className="fixed -z-10 top-0 left-0 w-screen h-screen bg-[--topnavbar-mobile-bg]"
          />
        </div>
      )
    );
  }

  function heroRender() {
    return isXLarge ? (
      <div className="w-[85%]">
        <HeroPC />
      </div>
    ) : (
      <div className="w-[100%] p-2 pl-0 bg-[--secondary-bg-color]">
        <HeroMobile />
      </div>
    );
  }

  function productCategoryMap(data) {
    return <ProductCategory key={data.id} img={data.img} txt={data.txt} />;
  }

  const allProductCategoryXL = productCategoryDataPC.map(productCategoryMap);
  const allProductCategorySM1 = productCategoryDataMobile
    .slice(0, 8)
    .map(productCategoryMap);
  const allProductCategorySM2 = productCategoryDataMobile
    .slice(8)
    .map(productCategoryMap);

  return (
    <section className="max-w-inline w-full ">
      <div>{isLarge && <TopLogos />}</div>
      {topNavRender()}
      {callToOrderRender()}
      <div className=" lg:px-[--lg-px] mt-4 gap-4 justify-between flex w-full overflow-hidden">
        {asideRender()}
        {heroRender()}
      </div>

      <div className=" bg-[#0098FD] lg:bg-[--bg-color] flex flex-col pt-[0.5rem] gap-[0.5rem] lg:pt-0">
        <div className=" gap-1 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between pb-3 lg:pb-0 xl:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
          {isXLarge ? allProductCategoryXL : allProductCategorySM1}
        </div>

        {isSmall && (
          <div className=" gap-1 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between xl:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
            {allProductCategorySM2}
          </div>
        )}

        <div className=" border border-red-600 h-[100vh] lg:rounded-md w-full lg:mt-0.5rem">

        </div>
      </div>
    </section>
  );
};

export default Home;
