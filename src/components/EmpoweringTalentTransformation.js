import React from "react";
import xyz from "../images/talent-transformations-lead.png";

const EmpoweringTalentTransformation = () => {
  return (
    <div className="bg-yellow-600 min-h-screen flex flex-col lg:flex-row items-center justify-between p-10 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Text Section */}
      <div className="text-left text-white w-full lg:w-[50%] px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-mono">
          Empowering Talent Transformation
        </h1>
        <p className="text-lg lg:text-xl mb-4 font-thin italic">
          Build vital capabilities to deliver digital outcomes.
        </p>

        {/* Explore Button */}
        <button className="relative font-semibold text-white py-2 px-6 border border-white rounded-sm w-40 hover:bg-black transition-all duration-300 overflow-hidden group">
          <span className="relative z-10">EXPLORE</span>
          <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>

        {/* Content Links */}
        <div className="mt-8 flex flex-col lg:flex-row justify-start space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-[50%]">
            <h3 className="text-lg lg:text-xl font-bold pb-5">
              Pfizer's journey towards increased productivity, powered by AI
            </h3>
            <a href="#" className="text-white font-semibold">
              View
            </a>
          </div>
          <div className="w-full lg:w-[50%]">
            <h3 className="text-lg lg:text-xl font-bold pb-5">
              A government that contributes to the joy of parenting
            </h3>
            <a href="#" className="text-white font-semibold">
              View
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          src={xyz}
          className="w-full max-w-xs lg:max-w-lg object-contain h-auto"
          alt="Talent Transformation"
        />
      </div>
    </div>
  );
};

export default EmpoweringTalentTransformation;
