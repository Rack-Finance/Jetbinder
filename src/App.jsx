import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import { ContactUs } from "./Container/pages/contactUs";
import { AboutUs } from "./Container/pages/aboutUs";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </>
  );
}
