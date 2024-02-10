import React from "react";
import deliveryman from "../../assets/Deliveryman.svg";

export const Tracker = () => {
  return (
    <div className="trackerSection  pl-28 pr-40 flex items-center justify-between">
      <div>
        <h1 className="text-white  text-[28px] font-bold">
          Advanced Fleet Tracking <br />
          Solution Tracker
        </h1>

        <div className="w-[8rem] bg-[#F48C08] mt-6 cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
          Get Started
        </div>
      </div>

      <img src={deliveryman} alt="" className="w-[17rem]" />
    </div>
  );
};
