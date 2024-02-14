import React, { useState } from "react";
import { Navbar } from "../Home/Navbar";
import Banner from "../../assets/contactUs/contactUsHero.svg";
import { GrLocation } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import truck from "../../assets/contactUs/contactPagetruck.svg";
import { Footer } from "../Home/footer";

export const ContactUs = () => {
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
      <img src={Banner} alt="" className="w-full" />
      <div className="lg:px-28 md:px-16 sm:px-8  px-4 py-10 w-full flex flex-col md:flex-row justify-between mt-12 md:mt-24 mb-24">
        <div className="md:w-[30%] w-full">
          <h1 className="text-[24px] font-[600]">Let's talk with us</h1>
          <p className="text-[16px] my-6 font-[300]">
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>

          <div className="flex items-center gap-4">
            <GrLocation style={{ color: "A646B5" }} />
            <p className="font-[600] text-[18px]">***********************</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneVolume style={{ color: "A646B5" }} />
            <p className="font-[600] text-[18px]">***********************</p>
          </div>
          <div className="flex items-center gap-4">
            <IoMdMail style={{ color: "A646B5" }} />
            <p className="font-[600] text-[18px]">***********************</p>
          </div>
        </div>

        <div className="md:w-[40%] w-full sm:w-[60%] sm:mx-auto md:mx-0 mt-4 md:mt-0 border border-[#BDBDBD] p-8 flex flex-col gap-6 shadow-lg bg-white">
          <div className="flex gap-4 w-full">
            <input
              name="firstname"
              value={formvalue.firstname}
              placeholder="First Name"
              onChange={handleChange}
              className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-2 rounded-lg text-[14px]"
            />
            <input
              name="lastname"
              value={formvalue.lastname}
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-2 rounded-lg text-[14px]"
            />
          </div>
          <input
            name="email"
            value={formvalue.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-2 rounded-lg text-[14px]"
          />
          <input
            name="phonenumber"
            value={formvalue.phonenumber}
            placeholder="Phone Number"
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
            Send Message
          </div>
        </div>
      </div>

      {/* Truck  */}

      <img src={truck} alt="" className="w-full" />

      <Footer />
    </div>
  );
};
