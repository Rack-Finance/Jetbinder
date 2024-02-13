import React, { useState } from "react";
import { Navbar } from "../Home/Navbar";
import Banner from "../../assets/contactUs/contactUsHero.svg";
import { GrLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import truck from "../../assets/aboutUs/vehicle.svg";
import recMap from "../../assets/aboutUs/Rectanglemap.svg";

import { Footer } from "../Home/footer";

export const AboutUs = () => {
  const [formvalue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="lg:px-28 md:px-16 sm:px-8  px-4 py-10 w-full flex flex-col md:flex-row justify-between items-center mt-12 md:mt-6 mb-4">
        <div className="md:w-[30%] w-full">
          <h1 className="text-[24px] font-[600]">About</h1>
          <p className="text-[16px] my-6 font-[300]">
            Welcome to Jetbinder! Your trusted logistics partner committed to
            providing reliable, secure, and efficient transportation solution.
            Every parcel takes extra care.
          </p>
        </div>

        <img
          src={truck}
          alt=""
          className="md:w-[50%] w-full sm:w-[60%] sm:mx-auto md:mx-0 mt-4 md:mt-0"
        />
      </div>

      {/* Truck  */}

      <div className="lg:px-28 md:px-16 sm:px-8  px-4 py-10 w-full flex flex-col md:flex-row justify-between items-center  mb-24">
        <img
          src={recMap}
          alt=""
          className="md:w-[40%] w-full sm:w-[60%] sm:mx-auto md:mx-0 mt-4 md:mt-0"
        />

        <div className="md:w-[40%] w-full">
          <h1 className="text-[24px] font-[600]">How we do it</h1>
          <p className="text-[16px] my-6 font-[300]">
            Reliable Fleet: Our Fleet of 3 bikes and a van ensures prompt and
            secure deliveries. <br />
            Customer-Centric: Every parcel receives extra care, reflecting our
            commitment to customer satisfaction.
            <br />
            Advanced Technology: Jetbinder leverages cutting-edge technology for
            seamless tracking and efficient logistics. <br />
            Nationwide Reach: From local deliveries to broader coverage, we’re
            here to meet your logistics needs. <br />
            Business Solutions: Tailored logistics solutions for businesses,
            ensuring smooth for supply chain operations.
            <br />
            Experience the Jetbinder difference-delivering excellence with every
            parcel.
          </p>
        </div>
      </div>

      <div></div>

      <Footer />
    </div>
  );
};
