import React, { useState } from "react";
import Logo from "../../assets/jetbinderLogo.svg";
import { FaBars } from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [toggleMobile, setTogglemobile] = useState(false);

  const pathname = window.location.pathname;
  const splitLocation = pathname.split("/");

  // <AnchorLink
  //   spy={true}
  //   smooth={true}
  //   to="productSection"
  //   onClick={closeMobileMenu}
  // >
  //   Products
  // </AnchorLink>;

  // id = "productSection";
  // const location = useLocation();

  const navigateToHomePage = () => {
    window.location.href = "/"; // Navigate to the homepage
  };

  const handleSolutionClick = () => {
    if (window.location.pathname !== "/") {
      navigateToHomePage(); // Navigate to the homepage first
    }

    window.onload = () => {
      setTimeout(() => {
        const solutionSection = document.getElementById("solutionSection");
        if (solutionSection) {
          solutionSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 5);
    };
  };

  return (
    <div className="bg-[#7B32B5] w-full sticky z-[100] top-0 lg:px-28 md:px-16 sm:px-8  px-4  sm:py-6  py-3 flex justify-between items-center">
      <Link to="/">
        {" "}
        <img src={Logo} alt="" className="w-[8rem] md:w-[10rem]" />
      </Link>

      <ul className="sm:flex  gap-6 md:gap-14   font-light hidden  text-[#D8D7F1] text-[14px] ">
        <AnchorLink
          spy={true}
          smooth={true}
          to="solutionSection"
          className="cursor-pointer"
          onClick={() => {
            setTogglemobile(false);
            handleSolutionClick();
          }}
        >
          Solutions
        </AnchorLink>
        <li className="cursor-pointer">API's</li>
        {/* <li className="cursor-pointer">About</li> */}
        <Link
          to="/about-us"
          className={`cursor-pointer ${
            splitLocation[1] === "about-us"
              ? "text-[#F48C08]"
              : "text-[#D8D7F1]"
          }`}
        >
          About{" "}
        </Link>
        <Link
          to="/contact-us"
          className={`cursor-pointer ${
            splitLocation[1] === "contact-us"
              ? "text-[#F48C08]"
              : "text-[#D8D7F1]"
          }`}
        >
          Contact
        </Link>
      </ul>

      <div className="sm:flex hidden gap-6">
        <div className="bg-white text-[#7B32B5] cursor-pointer w-[8rem] text-center text-[14px] px-2 py-2 font-semibold rounded-lg">
          Download App
        </div>
        <Link
          to="/login"
          className="w-[8rem] bg-[#F48C08] cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]"
        >
          Get started{" "}
        </Link>
        {/* <div className="w-[8rem] bg-[#F48C08] cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
          Sign up
        </div> */}
      </div>

      <div className="text-[#D8D7F1] sm:hidden">
        <FaBars
          onClick={() => {
            setTogglemobile(!toggleMobile);
          }}
        />
      </div>

      {toggleMobile && (
        <div className="fixed z-[200] top-0 bottom-0 left-0 right-0 bg-[#7B32B5] px-4 py-3 ">
          <div className="flex items-center justify-between text-[#D8D7F1]">
            <img src={Logo} alt="" className="w-[8rem] md:w-[10rem]" />
            <TiTimes
              onClick={() => {
                setTogglemobile(false);
              }}
            />
          </div>

          <ul className="flex flex-col  gap-2  font-light   text-[#D8D7F1] text-[14px] my-8">
            <AnchorLink
              spy={true}
              smooth={true}
              to="solutionSection"
              onClick={() => {
                setTogglemobile(false);
                handleSolutionClick();
              }}
              className="cursor-pointer"
            >
              Solutions
            </AnchorLink>
            <li className="cursor-pointer">API's</li>
            <li className="cursor-pointer">About</li>
            <Link to="/contact-us" className="cursor-pointer">
              Contact
            </Link>
          </ul>

          <div className="flex flex-col gap-4">
            <div className="bg-white text-[#7B32B5] cursor-pointer w-[12rem] text-center text-[14px] px-2 py-2 font-semibold rounded-lg">
              Download App
            </div>
            <Link
              to="/login"
              className="w-[12rem] bg-[#F48C08] cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]"
            >
              Get started{" "}
            </Link>
            {/* <div className="w-[12rem] bg-[#F48C08] cursor-pointer text-[#FFF] text-center px-2 py-2 rounded-lg font-semibold text-[14px]">
              Get started{" "}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
