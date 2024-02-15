import React from "react";
import deliveryman from "../../assets/Deliveryman.svg";
import { Link } from "react-router-dom";

export const Tracker = () => {
  return (
    <div className="trackerSection md:pr-16 md:pl-16  sm:px-8  px-4 pt-10 ss:pt-0   lg:pl-28 lg:pr-40 flex flex-col ss:flex-row items-center justify-between">
      <div>
        <h1 className="text-white text-[20px] sm:text-[24px]  md:text-[28px] font-bold">
          Advanced Fleet Tracking <br className="hidden ss:block" />
          Solution <br className=" ss:hidden" />
          Tracker
        </h1>

        <Link to="/login">
          <div className="w-[12rem] ss:w-[8rem] bg-[#F48C08] mt-6 cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
            Get Started
          </div>
        </Link>
      </div>

      <img src={deliveryman} alt="" className="w-[17rem]" />
    </div>
  );
};
