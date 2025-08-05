import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BigStepper from "../components/stepper/BigStepper";

export default function Form_Page() {
  return (
    <div>
      <Header />

      <div className="px-10 parent w-full h-[1440px] bg-[#F5F5F5] relative ">
        <BigStepper />
        
      </div>

      <Footer />
    </div>
  );
}

