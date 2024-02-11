import React from "react";
import footerLogo from "../../assets/footerlogo.svg";
import twittericon from "../../assets/Twitter.svg";
import instagramIcon from "../../assets/Instagram.svg";
import facebookIcon from "../../assets/Facebook.svg";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#F1F6FF] w-full text-[#2E526B] lg:px-28 md:px-16 sm:px-8  px-4  ">
        <div className="vlg:container vlg:mx-auto  pt-14 font-fontLight">
          <div className="grid grid-cols-2 lg:grid-cols-6 ss:grid-cols-3 sm:grid-cols-4 gap-8 pb-10 sm:pb-20">
            <div>
              <div className="pr-[40px] cursor-pointer">
                <a href="#">
                  <img
                    src={footerLogo}
                    alt="Logo"
                    className="w-[6rem] md:w-[10rem]"
                  />
                  {/* <img className="w-[150px]" src={VestiLogo} alt="vesti-logo" /> */}
                </a>
              </div>
            </div>

            <div>
              <ul className="flex flex-col">
                <li className="text-base font-fontSemi font-medium pb-3">
                  Product
                </li>
                <a
                  href=""
                  //   target="_blanck"
                  className="sm:text-sm text-[12px] font-fontLight pb-2 hover:text-[#D090FF] hover:font-fontSemi"
                >
                  Features
                </a>
                <a
                  href=""
                  //   target="_blanck"
                  className="sm:text-sm text-[12px] pb-2 font-fontLight hover:text-[#D090FF] hover:font-fontSemi"
                >
                  API
                </a>
                <a
                  href=""
                  //   target="_blanck"
                  className="sm:text-sm text-[12px]  pb-2 font-fontLight hover:text-[#D090FF] hover:font-fontSemi"
                >
                  Solutions
                </a>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col">
                <li className="text-base font-medium pb-3 font-fontSemi">
                  Company
                </li>

                <a
                  href="#"
                  className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:text-[#D090FF] hover:font-fontSemi"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:text-[#D090FF] hover:font-fontSemi"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:text-[#D090FF] hover:font-fontSemi"
                >
                  Contact us
                </a>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col">
                <li className="text-base font-medium pb-3 font-fontSemi">
                  Support
                </li>
                <li className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:cursor-pointer hover:text-[#D090FF]">
                  Support center{" "}
                </li>
                <li className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:cursor-pointer hover:text-[#D090FF]">
                  System status
                </li>
                <li className="sm:text-sm text-[12px]  font-fontLight pb-2 hover:cursor-pointer hover:text-[#D090FF]">
                  Languages
                </li>
              </ul>
            </div>

            <div className="mx-[1rem]"></div>

            <div>
              <ul className="flex flex-col">
                <li className="text-base pb-3 font-fontSemi">Follow us</li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={facebookIcon} alt="" className="w-8 h-8" />
                  <img src={twittericon} alt="" className="w-8 h-8" />
                  <img src={instagramIcon} alt="" className="w-8 h-8" />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between border-t-[0.5px] border-[#2E526B] pt-4 pb-7 text-sm font-fontLight">
            <p className="sm:text-sm text-[12px] ">
              Copyrights &copy; 2024 Jetbinder{" "}
            </p>
            <p className="sm:text-sm text-[12px] ">
              Terms & conditions | Privacy policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
