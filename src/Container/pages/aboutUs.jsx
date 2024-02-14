import React, { useState } from "react";
import { Navbar } from "../Home/Navbar";
import Banner from "../../assets/contactUs/contactUsHero.svg";
import { GrLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import truck from "../../assets/aboutUs/vehicle.svg";
import recMap from "../../assets/aboutUs/Rectanglemap.svg";
import deliveryman from "../../assets/Deliveryman.svg";

import { Footer } from "../Home/footer";
import "./index.css";

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
      <div className="lg:px-28 md:px-16 sm:px-8  px-4 py-10 w-full flex flex-col sm:flex-row justify-between items-center mt-12 md:mt-6 mb-4">
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

      <div className="lg:px-28 md:px-16 sm:px-8  px-4 py-10 w-full flex flex-col sm:flex-row justify-between gap-8 items-center  mb-24">
        <img
          src={recMap}
          alt=""
          className="md:w-[40%] w-full sm:w-[60%] hidden sm:block sm:mx-auto md:mx-0 mt-4 md:mt-0"
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

        <img
          src={recMap}
          alt=""
          className="md:w-[40%] w-full sm:w-[60%] sm:hidden  sm:mx-auto md:mx-0 mt-4 md:mt-0"
        />
      </div>

      <div className="aboutusQuickRequest flex flex-col md:flex-row justify-between lg:px-28 md:px-16 items-center sm:px-8  px-4">
        <img src={deliveryman} alt="" className="w-[30%] hidden md:block" />

        {/* Form  */}

        <div className="md:w-[40%] w-full sm:w-[60%] my-10 sm:mx-auto md:mx-0 h-full  border border-[#BDBDBD] p-8 flex flex-col gap-6 shadow-lg bg-white">
          <div>
            <h1 className="text-[30px] font-[600]">Make a quick request</h1>

            <p className="text-[#333333] mt-1  text-[13px] font-[300]">
              Make a quick request without getting signed in, give us a try
            </p>
          </div>

          <input
            name="email"
            value={formvalue.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-2 rounded-lg text-[14px]"
          />

          <textarea
            name="message"
            value={formvalue.message}
            placeholder="Your message"
            onChange={handleChange}
            className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-4 rounded-lg text-[14px]"
          />
          <div
            className="bg-[#F48C08] text-[white] px-12 py-3 text-center rounded-lg cursor-pointer"
            onClick={() => [
              setFormValue({
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                message: "",
              }),
            ]}
          >
            Submit{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
