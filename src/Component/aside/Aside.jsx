import React from "react";
import AsideChip from "./AsideChip";

import {asideChipData} from '../../Page/home/HomeData'
import {LuApple, LuCircleEllipsis, LuGamepad2} from 'react-icons/lu'
import {FaRegSmileBeam} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'
import {PiCookingPot, PiTelevisionDuotone, PiTShirt, PiBaby, PiDesktop} from 'react-icons/pi'
import {BsPhone} from 'react-icons/bs'
import {CiDumbbell} from 'react-icons/ci'

const asideData = ({id, icon, txt}) => {

  const icons = {
    LuApple: <LuApple />,
    FaRegSmileBeam: <FaRegSmileBeam />,
    GoHome: <GoHome />,
    PiCookingPot: <PiCookingPot />,
    BsPhone: <BsPhone/>,
    PiDesktop: <PiDesktop />,
    PiTelevisionDuotone: <PiTelevisionDuotone />,
    PiTShirt: <PiTShirt />,
    PiBaby: <PiBaby />,
    LuGamepad2: <LuGamepad2 />,
    CiDumbbell: <CiDumbbell />,
    LuCircleEllipsis: <LuCircleEllipsis />
  };

  return (
    <AsideChip key={id} icon={icons[icon]} txt={txt}/>
  )


}

const Aside = () => {


  return (
    <section className="max-w-inline w-full">
      <div className=" pl-3 bg-[--secondary-bg-color] rounded-[--card-radius1]  w-full">
        {asideChipData.map(asideData)}

        
      </div>
    </section>
  );
};

export default Aside;
