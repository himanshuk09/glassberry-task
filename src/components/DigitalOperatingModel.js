import React from "react";
import abc from "../images/digital-operating-models-lead-mob.png";

const DigitalOperatingModel = () => {
  return (
    <div className="bg-blue-800 min-h-screen flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 space-y-8 lg:space-y-0">
      {/* Left Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={abc}
          className="w-full max-w-xs lg:max-w-lg object-contain relative lg:left-[-20px]"
          alt="Digital Operating Model"
        />
      </div>

      {/* Right Text Section */}
      <div className="text-white lg:w-1/2 flex flex-col justify-center py-6 lg:py-52 lg:pr-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-mono">
          Digital Operating Model
        </h1>
        <p className="text-lg lg:text-xl mb-4 font-thin italic">
          For the AI-first Enterprise
        </p>

        {/* Button */}
        <button className="relative font-semibold text-white py-2 px-6 border border-white rounded-sm w-40 hover:bg-black transition-all duration-300 overflow-hidden group">
          <span className="relative z-10">EXPLORE</span>
          <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>

        {/* Links Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-start space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="lg:w-1/2">
            <h3 className="text-lg lg:text-xl font-bold pb-5">
              A transformation story of BASF Agricultural Solutions
            </h3>
            <p className="text-sm lg:text-base">
              To achieve faster time-to-market using DevOps and DataOps
            </p>
            <a href="#" className="text-white font-semibold mt-2">
              View
            </a>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-lg lg:text-xl font-bold pb-5">
              NN Life Insurance Company partners with Infosys
            </h3>
            <p className="text-sm lg:text-base">
              For its Cloud and Agile Transformation
            </p>
            <a href="#" className="text-white font-semibold mt-2">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalOperatingModel;
