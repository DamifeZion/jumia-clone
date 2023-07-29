import React from "react";
import { useState, useRef } from "react";
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
  ProductBoard,
  FlashSale,
} from "../../Component/export";
import {
  productCategoryDataPC,
  productCategoryDataMobile,
  topSellingProduct,
} from "../../Page/home/HomeData";

const Home = () => {
  const theme = useTheme();
  const is2XLarge = useMediaQuery(theme.breakpoints.up("1280"));
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
      <div className=" sticky top-0 z-50">
        <TopNavbarPC />
      </div>
    );
  }

  function callToOrderRender() {
    return (
      isSmall && (
        <p className=" text-[1rem] py-1 text-center bg-[--limited-stock-deal] ">
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
        <div className="overflow-y fixed top-0 left-0 z-[100] bg-[--secondary-bg-color] w-[86%] smlg:w-[85%] h-full ">
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

  //stop body scrolling when asideRenders is shown

  const body = document.querySelector("body");
  toggleMenu
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "auto");

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

  function topSellingItemRender() {
    return (
      is2XLarge && (
        <ProductBoard
          pbTitle={"Top selling items"}
          productItems={topSellingProduct}
        />
      )
    );
  }

  function limitedStockDealsRender() {
    return (
      <ProductBoard
        pbTitle={""}
        pbTitleStyle={null} //not necessary just to ease understanding
        productItems={topSellingProduct}
        seeAll={""}
      />
    );
  }


  return (
    <div>
      <div>{isLarge && <TopLogos />}</div>
      {topNavRender()}
      {callToOrderRender()}

      <section className="max-w-inline w-full ">
        <div className=" lg:px-[--lg-px] mt-2 gap-4 justify-between flex w-full">
          {asideRender()}
          {heroRender()}
        </div>

        <div className=" bg-[--mobile-bg-color] lg:bg-[--bg-color] flex flex-col pt-[0.5rem] gap-[0.5rem] lg:pt-0 ">
          <div className="component-shadow gap-1 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between pb-3 lg:pb-2 xl:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
            {isXLarge ? allProductCategoryXL : allProductCategorySM1}
          </div>

          {isSmall && (
            <div className=" gap-1 pb-2 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between xl:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
              {allProductCategorySM2}
            </div>
          )}
        </div>

        <div className=" mx-[--lg-px] mt-1">{topSellingItemRender()}</div>

        <div className="flex flex-col mt-2 lg:mx-[--lg-px]">
          <FlashSale />
          {limitedStockDealsRender()}
        </div>
      </section>
    </div>
  );
};

export default Home;
