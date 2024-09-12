import React from "react";

const SlideOne = () => {
  return (
    <div className="bg-[url('./images/ai-amplified-marketing-suite-lead.jpg')] bg-cover  bg-center min-h-screen flex items-center justify-left lg:pl-36 pl-6">
      <div
        className="text-left text-white px-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
        data-aos="zoom-out"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 font-mono">
          Launched Infosys Aster. The AI-amplified Marketing Suite.
        </h1>
        <button className="relative font-semibold text-white py-2 px-6 border border-white rounded-sm w-32 sm:w-40 hover:bg-black transition-all duration-300 overflow-hidden group">
          <span className="relative z-10">Know More</span>
          <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default SlideOne;
