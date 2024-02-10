import React, { useState } from "react";
import { DashboardInterface } from "./interfaces/dashboardInterface";
import { CustomerApp } from "./interfaces/customerApp";
import { AgentApp } from "./interfaces/agentApp";

const interfaceTitles = [
  { title: "Dashboard", id: 1 },
  { title: "Customer App", id: 2 },
  { title: "Agent App", id: 3 },
];

export const Interfaces = () => {
  const [myinterface, setMyInterface] = useState("Dashboard");

  return (
    <div className="InterfacesSection px-28 pb-20 pt-28">
      <div className="flex flex-col items-center justify-center mb-10 mt-20">
        <h1 className="text-[#2E526B] font-bold text-[22px] mt-24">
          Delivery Business Interfcaes{" "}
        </h1>
        <div className="bg-[#7B32B5] w-12 h-[2px] mt-2"></div>
      </div>

      <div className="flex justify-center items-center gap-10">
        {interfaceTitles.map(({ title, id }) => {
          return (
            <p
              key={id}
              className={`text-[#2E526B] border-[0.5px] border-[#2E526B] py-2 px-8 rounded-md cursor-pointer ${
                myinterface === title ? "bg-orange-400" : "bg-transparent"
              }`}
              onClick={() => {
                setMyInterface(title);
              }}
            >
              {title}
            </p>
          );
        })}
      </div>

      <div className="flex justify-center mt-24 InterfacedisplayBg">
        <MyInterfaceDisplay myinterface={myinterface} />
      </div>
    </div>
  );
};

const MyInterfaceDisplay = (props) => {
  switch (props.myinterface) {
    case "Dashboard":
      return <DashboardInterface />;
    case "Customer App":
      return <CustomerApp />;
    case "Agent App":
      return <AgentApp />;
    default:
      return <DashboardInterface />;
  }
};
