// import React from "react";
import jumiaStar from "../assets/jumia-star.png";
import jumiaLogo from "../assets/jumia-logo.png";
import jumiaPay from "../assets/jumia-pay.png";
import jumiaFood from "../assets/jumia-food.png";
import jumiaParty from "../assets/jumia-party.png";

const TopLogos = () => {
  const logoStyle = {
    width: "60px",
  };

  return (
    <section className="max-w-inline">
      <div className=" flex bg-[var(--bg-color)] place-items-center place-content-between pl-[var(--lg-px)] py-[0.4rem] w-2/3 ">
        <div className=" flex place-items-center place-content-center  gap-2">
          <img src={jumiaStar} alt="jumia star" className=" w-[0.9rem]" />
          <p className=" cursor-pointer underline text-[var(--cta-color)] font-semibold hover:no-underline">
            Sell on Jumia
          </p>
        </div>

        <div className=" flex place-items-center place-content-center  gap-4">
          <img src={jumiaLogo} alt="Jumia Logo" style={logoStyle} />
          <img src={jumiaPay} alt="Jumia Pay" className=" w-[45px]" />
          <img src={jumiaFood} alt="Jumia Food" style={logoStyle} />
          <a className=" gap-[0.1rem] font-bold">
            <img src={jumiaParty} alt="Jumia Party" className="w-[13px]" />{" "}
            <p className="secondary-font-family tracking-wide text-[0.8rem] text-[#C5902F]">
              PARTY
            </p>
          </a>
          <h3 className="secondary-font-family tracking-wider font-semibold text-[#C5902F] text-[0.8rem]">
            LOGISTICS
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TopLogos;
