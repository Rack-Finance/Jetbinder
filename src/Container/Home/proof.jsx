import React from "react";
import icon1 from "../../assets/trackingIcon.svg";
import icon2 from "../../assets/proofOfDelivery.svg";
import icon3 from "../../assets/realTime.svg";

const myData = [
  {
    img: icon1,
    title: "Real-time tracking",
    text: "By adopting real time delivery tracking software, final mile delivery management has become easier.",
  },
  {
    img: icon2,
    title: "Proof of Delivery",
    text: "The system works with the electronic and digital signatures of the recipient on receiving the delivery item.",
  },
  {
    img: icon3,
    title: "Real-time tracking",
    text: "By adopting real time delivery tracking software, final mile delivery management has become easier.",
  },
];

export const Proof = () => {
  return (
    <div className="bg-[#F1F6FF] ">
      <div className="proofSection flex flex-col justify-center pt-20">
        {" "}
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-[#fff] font-bold text-[22px] text-center">
            All in one proof for <br /> final mile delivery solutions
          </h1>
          <div className="bg-[#fff] w-12 h-[2px] mt-3"></div>
        </div>
        <div className="flex px-28 gap-6 items-center ">
          {myData.map(({ img, title, text }, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <img src={img} alt="" className="w-[3rem] h-[3rem] mb-2" />
                <p className="text-white text-center text-[16px] font-bold">
                  {title}
                </p>
                <p className="text-center text-[13px] text-[#D8D7F1] font-[200]">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
