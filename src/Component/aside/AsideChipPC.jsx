import React from "react";

const AsideChipPC = ({ icon, txt, style, styleDiv, styleI, styleH4 }) => {
  return (
    <div
      style={{ ...style, ...styleDiv }}
      className="flex items-end  gap-2 py-2 hover:text-[--cta-color] group cursor-pointer  w-full"
    >
      <i style={styleI} className="text-[1.05rem]">
        {icon}
      </i>
      <h4
        style={styleH4}
        className=" leading-[0.8rem] text-[--text-color1] group-hover:text-[--cta-color]"
      >
        {txt}
      </h4>
    </div>
  );
};

export default AsideChipPC;
