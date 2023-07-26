import React from "react";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  TopLogos,
  TopNavbarPC,
  TopNavbarMobile,
  Aside,
  Hero,
} from "../../Component/export";

const Home = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("1025"));
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className="Home">
      <div>{isLarge && <TopLogos />}</div>

      <div>{isSmall ? <TopNavbarMobile /> : <TopNavbarPC />}</div>

      <section className="max-w-inline px-[--lg-px] mt-4 gap-4 justify-between flex border border-red-500 w-full">
        <div className=" w-[18%]">
          <Aside />
        </div>

        <div className="w-[82%] ">
          <Hero />
        </div>
      </section>
    </div>
  );
};

export default Home;
