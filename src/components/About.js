import React from "react";
import histroyImg from "../images/history.jpg";
import img1 from "../images/founders-lrg.jpg";
import img2 from "../images/Infosys_(4911287704).jpg";
import Carousel from "./Carousel";

const images = [
  <img src={histroyImg} alt="Image 1" className="rounded-lg shadow-lg" />,
  <img src={img1} alt="Image 1" className="rounded-lg shadow-lg" />,
  <img src={img2} alt="Image 1" className="rounded-lg shadow-lg" />,
];
const AboutUs = () => {
  return (
    <div className="min-h-screen dark:bg-slate-800 bg-gray-50 flex flex-col justify-center items-center py-12">
      <div className="max-w-7xl w-full shadow-lg rounded-lg p-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-6">
          <h1 className="text-4xl text-white font-bold mb-4">About Us</h1>
          <p className="text-gray-200 mb-6">
            Infosys is a global leader in next-generation digital services and
            consulting, with a presence in 56 countries. Generating US$18.7
            billion in total revenue (LTM), the company remains committed to
            innovation and excellence. With over 24 million training hours
            conducted globally.Our approach prioritizes seamless integration and
            lasting impact.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl text-white font-semibold">
                1. Extraordinary Performance
              </h2>
              <p className="text-gray-200">
                We believe that small ideas, when crafted well, create
                groundbreaking concepts that transform businesses.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold">
                2. Digital Empowerment
              </h2>
              <p className="text-gray-200">
                Leveraging technology to empower our partners and drive their
                growth in a competitive market.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold">
                3. Sustainable Solutions
              </h2>
              <p className="text-gray-200">
                Focusing on sustainability and innovation to build lasting value
                for communities and ecosystems.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold">
                4. Future-Ready Workforce
              </h2>
              <p className="text-gray-200">
                Equipping our teams with skills for tomorrow, helping them stay
                ahead in a constantly evolving digital world.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:mt-5 relative flex justify-center items-center">
          <img
            src={histroyImg}
            alt="Image 1"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
