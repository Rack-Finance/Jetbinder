import React, { useState } from "react";
import { Navbar } from "../../Home/Navbar";
// import { Footer } from "../../Home/footer";
import "../index.css";
import { ImCheckboxChecked } from "react-icons/im";
import { Link } from "react-router-dom";

export const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    // Update the state variable
    setIsChecked(!isChecked);
  };

  const [formvalue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  return (
    <div>
      <Navbar />

      <div className="sm:px-8 px-4">
        <div className="md:w-[35%] w-full sm:w-[60%] mx-auto my-24   border border-[#BDBDBD] p-8 flex flex-col gap-6 shadow-lg bg-white">
          <div>
            <h1 className="text-[18px] font-[300]">Welcome back!!!</h1>
            <p className="text-[28px] font-[600]">Please Sign In</p>
          </div>

          <input
            name="email"
            value={formvalue.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-3 rounded-lg text-[14px]"
          />
          <input
            name="password"
            value={formvalue.password}
            placeholder="password"
            onChange={handleChange}
            className="w-full focus:outline-none border border-[#BDBDBD] px-6 py-3 rounded-lg text-[14px]"
          />

          <div className="flex w-full justify-between items-center">
            <div className="text-[14px] flex items-center gap-3">
              {" "}
              <ImCheckboxChecked
                style={{
                  background: "white",
                  color: isChecked ? "#F48C08" : "white",
                  cursor: "pointer",
                  border: "1px solid #518C36",
                  width: "14px",
                  height: "14px",
                  borderRadius: "2px",
                }}
                onClick={() => handleCheckboxChange()}
              />{" "}
              Remember me
            </div>

            <div className="text-[#F48C08] text-[14px] cursor-pointer">
              I forgot my password
            </div>
          </div>

          <div
            className="bg-[#F48C08] text-[white] px-12 py-3 text-center rounded-lg cursor-pointer"
            onClick={() => [
              setFormValue({
                email: "",
                password: "",
              }),
            ]}
          >
            Continue{" "}
          </div>

          <div className="flex items-end justify-end">
            <p className="text-[#000] text-[16px] cursor-pointer">
              New user?{" "}
              <span className="text-[#F48C08] text-[16px] cursor-pointer">
                <Link to="/register">Creat account</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
