import React from "react";
import { useState, useEffect } from "react";
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
  heroBannerImg,
  productCategoryDataPC,
  productCategoryDataMobile,
  topSellingProduct,
  officialStoreBannerImg,
} from "../../Page/home/HomeData";
import Product from "../../Component/product-board/Product";

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
        <HeroPC allImage={heroBannerImg} />
      </div>
    ) : (
      <div className="w-[100%] p-2 pl-0 bg-[--secondary-bg-color]">
        <HeroMobile allImage={heroBannerImg} />
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

  function flashSaleDealsRender() {
    return (
      <ProductBoard
        pbTitle={""}
        pbTitleStyle={null} //Style pbTitle & seeAll
        productItems={topSellingProduct}
        seeAll={""}
      />
    );
  }

  function limtedStockDealsRender() {
    return (
      <ProductBoard
        pbTitle={"Limited Stock Deals"}
        pbTitleStyle={{ background: "var(--limited-stock-deal)" }} //Style BG Color of pbTitle & seeAll
        productItems={topSellingProduct}
        seeAll={"see all"}
      />
    );
  }

  function officialStoreBannerRender() {
    return isXLarge ? (
      <div className="w-[100%]">
        <HeroPC
          contStyle="h-[384px] rounded-none"
          bannerStyle={{ width: "100%" }}
          nonBannerStyle={{ display: "none" }}
          allImage={officialStoreBannerImg}
        />
      </div>
    ) : (
      <div className="w-[100%] p-2 pl-0 bg-[--secondary-bg-color]">
        <HeroMobile allImage={officialStoreBannerImg} />
      </div>
    );
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://course-api.com/react-store-products";
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  const productApi = () => {
    return data ? (
      data.map((item) => (
        <div
          key={item.id}
          className="product-api product overflow-hidden rounded-md cursor-pointer hover:scale-[1.01] relative w-[31%] sm:w-[31.9%] md:w-[32.6%] smlg:w-[24.4%] lg:w-[16%] h-[150px] md:h-[280px] smlg:h-[320px] lg:h-[220px] pb-4 md:pb-0 lg:pb-0 mb-3 lg:mb-5"
        >
          <p
            style={{ display: !item.category && "none" }}
            className=" absolute top-1 md:top-2 right-1 md:right-2 z-[1] px-[.2rem] md:px-[.32rem] py-[.13rem] text-[--discount-txt-color] rounded-[0.2rem] text-[.65rem] md:text-[.85rem] font-normal bg-[--discount-bg-color]"
          >
            {item.category}
          </p>

          <div className="h-[70%] md:h-[75%] lg:h-[70%]">
            <img
              src={item.image}
              alt={`item ${item.image}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[30%] md:h-[25%] lg:h-[30%] mt-2 text-[0.75rem] md::text-[0.9rem] font-light px-2">
            <p className=" text-ellipsis overflow-hidden whitespace-nowrap">
              {item.description}
            </p>
            <p className="font-medium text-[0.75rem] md:text-[1rem] w-full whitespace-nowrap text-ellipsis overflow-hidden leading-6">{`₦ ${item.price}`}</p>
          </div>
        </div>
      ))
    ) : (
      <p>Loading items...</p>
    );
  };

  return (
    <div>
      <div>{isLarge && <TopLogos />}</div>
      {topNavRender()}
      {callToOrderRender()}

      <section className="max-w-inline w-full ">
        <div className=" lg:px-[--lg-px] mt-3 gap-4 justify-between flex w-full">
          {asideRender()}
          {heroRender()}
        </div>

        <div className=" bg-[--mobile-bg-color] lg:bg-[--bg-color] flex flex-col mt-3 gap-3 lg:pt-0 ">
          <div className="component-shadow gap-1 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between pb-3 lg:pb-2 lg:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
            {isXLarge ? allProductCategoryXL : allProductCategorySM1}
          </div>

          {isSmall && (
            <div className=" gap-1 pb-2 lg:p-2 flex flex-wrap px-[--sm-px] place-content-between lg:my-4 lg:mx-[--lg-px] lg:rounded-md bg-[--secondary-bg-color]">
              {allProductCategorySM2}
            </div>
          )}
        </div>

        <div className=" mx-[--lg-px] mt-3">{topSellingItemRender()}</div>

        <div className="flex flex-col mt-3 lg:mx-[--lg-px]">
          <FlashSale />
          {flashSaleDealsRender()}
        </div>

        <div className=" mt-3 lg:mt-5 lg:mx-[--lg-px]">
          {limtedStockDealsRender()}
        </div>

        <div className="component-shadow flex flex-col mt-3 lg:mt-5 lg:mx-[--lg-px] overflow-hidden lg:rounded-md">
          <li className="bg-[#DEF1FD] justify-center px-4 text-[1rem] lg:text-[1.3rem] lg:font-medium py-2">
            <h3>Official Store</h3>
          </li>
          {officialStoreBannerRender()}
        </div>

        <div className=" h-fit component-shadow mt-3 lg:mt-5 lg:mx-[--lg-px]">
          <li className="bg-[#DEF1FD] justify-center px-4 text-[1rem] lg:text-[1.3rem] lg:font-medium py-2">
            <h3>Official API Call</h3>
          </li>

          <div className="bg-[--secondary-bg-color] lg:bg-transparent flex flex-wrap gap-2 lg:justify-start lg:gap-[0.57rem] py-2 px-2 ">
            {productApi()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
