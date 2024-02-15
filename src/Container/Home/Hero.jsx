import React from "react";
import Herobanner from "../../assets/JetBinderHero.svg";
import playstore from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";
import Logos from "../../assets/Logos.svg";
import "./Home.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" heroContainer flex flex-col sm:flex-row sm:justify-between lg:px-28 md:px-16 sm:px-8  px-4 py-4 sm:py-10 relative ">
      <div className="neww "></div>
      <div className="md:mt-40 mt-10 z-10">
        <div className="">
          <h1 className="text-white text-center sm:text-[38px] text-[28px] font-bold">
            JetBinder Delivery
          </h1>
          <p className="text-[13px] text-[#D8D7F1] font-[200] text-center">
            Every parcel takes priority
          </p>
        </div>
        <Link to="/login">
          <div className="w-[8rem] bg-[#F48C08] mx-auto mt-6 cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
            Get started
          </div>
        </Link>
        <div className="flex gap-2 mt-6 justify-center">
          <img src={playstore} alt="" className="w-[8rem]" />
          <img src={appstore} alt="" className="w-[8rem]" />
        </div>
      </div>
      <div className="z-10">
        <img src={Herobanner} alt="" />
      </div>
      <div className="absolute bottom-[40px] ss:bottom-[0px] sm:bottom-[20px] sm:w-[38rem] md:w-[45rem] left-[0%] sm:left-[20%] md:left-[28%] z-10">
        <img src={Logos} alt="" />
      </div>
    </div>
  );
};

export default Hero;
