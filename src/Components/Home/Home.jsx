import React from "react";
import { Navbar } from "../../Container/Home/Navbar.jsx";
import Hero from "../../Container/Home/Hero.jsx";
import { Solution } from "../../Container/Home/Solution.jsx";
import { Interfaces } from "../../Container/Home/interfaces.jsx";
import { Proof } from "../../Container/Home/proof.jsx";
import { Faq } from "../../Container/Home/faq.jsx";
import { Tracker } from "../../Container/Home/tracker.jsx";
import { Footer } from "../../Container/Home/footer.jsx";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Solution />
        <Interfaces />
        <Proof />
        <Faq />
        <Tracker />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
