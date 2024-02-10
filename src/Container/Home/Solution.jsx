import React from "react";
import deliveries from "../../assets/pickAndDelivery.svg";
import movers from "../../assets/movers.svg";
import couriers from "../../assets/Courier.svg";
import logistics from "../../assets/Logistics.svg";

export const Solution = () => {
  return (
    <div className=" px-28 pb-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-[#2E526B] font-bold text-[22px] mt-24">
          Solutions for every delivery
        </h1>
        <div className="bg-[#7B32B5] w-12 h-[2px] mt-2"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        <Cards
          img={deliveries}
          title={"Pick and Delivery"}
          text={
            "Leverage agile frameworks provide a robust synopsis  high level overviews. "
          }
        />
        <Cards
          img={movers}
          title={"Movers"}
          text={
            "Bring to the table win-win survival strategies to ensure proactive domination."
          }
        />
        <Cards
          img={couriers}
          title={"Couriers"}
          text={
            " Organically grow the holis world view of disruptive innovation via workplace."
          }
        />
        <Cards
          img={logistics}
          title={"Air Freight"}
          text={
            "Nanotechnology immers along the information highway will close the loop."
          }
        />
      </div>
    </div>
  );
};

const Cards = (props) => {
  return (
    <div className="bg-[#fff] border py-10 px-4 border-[#DCE2EE] hover:border-b-[#7B32B5] hover:border-b-4 rounded-lg ">
      <div className="flex flex-col items-center gap-3">
        <img src={props.img} alt="" className="w-[4rem]" />
        <p className="text-[#2E526B] font-bold text-[16px]">{props.title}</p>
        <p className="text-[#2E526B] font-light">{props.text}</p>
      </div>
    </div>
  );
};
