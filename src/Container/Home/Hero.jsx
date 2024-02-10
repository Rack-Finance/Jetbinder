import React from "react";
import Herobanner from "../../assets/JetBinderHero.svg";
import playstore from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";
import Logos from "../../assets/Logos.svg";
import "./Home.css";

const Hero = () => {
  return (
    <div className=" heroContainer flex justify-between px-28 py-10 relative ">
      <div className="neww "></div>
      <div className="mt-40 z-10">
        <div className="">
          <h1 className="text-white text-center text-[38px] font-bold">
            JetBinder Delivery
          </h1>
          <p className="text-[13px] text-[#D8D7F1] font-[200] text-center">
            Every parcel takes priority
          </p>
        </div>

        <div className="w-[8rem] bg-[#F48C08] mx-auto mt-6 cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
          Get Started
        </div>

        <div className="flex gap-2 mt-6 justify-center">
          <img src={playstore} alt="" className="w-[8rem]" />
          <img src={appstore} alt="" className="w-[8rem]" />
        </div>
      </div>
      <div className="z-10">
        <img src={Herobanner} alt="" />
      </div>
      <div className="absolute bottom-[20px] w-[45rem] left-[15%] z-10">
        <img src={Logos} alt="" />
      </div>
    </div>
  );
};

export default Hero;
