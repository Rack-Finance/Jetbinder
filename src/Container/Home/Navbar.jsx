import React from "react";
import Logo from "../../assets/jetbinderLogo.svg";

export const Navbar = () => {
  return (
    <div className="bg-[#7B32B5] w-full sticky z-[1000] top-0  px-28 py-6 flex justify-between items-center">
      <img src={Logo} alt="" className="w-[10rem]" />

      <ul className="flex gap-14  font-light text-[#D8D7F1] text-[14px] ">
        <li className="cursor-pointer">Solutions</li>
        <li className="cursor-pointer">API's</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div className="flex gap-6">
        <div className="bg-white text-[#7B32B5] cursor-pointer w-[8rem] text-center text-[14px] px-2 py-2 font-semibold rounded-lg">
          Download App
        </div>
        <div className="w-[8rem] bg-[#F48C08] cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
          Sign up
        </div>
      </div>
    </div>
  );
};
