import React from "react";

const Services = () => {
  return (
    <div className="dark:bg-slate-800 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Experience
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Infosys Aster</li>
              <li>Digital Marketing</li>
              <li>Digital Interactions</li>
              <li>Digital Commerce</li>
              <li>Infosys Metaverse Foundry</li>
              <li>Digital Workplace Services</li>
              <li>Digital Experience</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Insight
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Infosys Topaz</li>
              <li>Infosys Generative AI</li>
              <li>Data Analytics and AI</li>
              <li>Infosys Sustainability Services</li>
              <li>Applied AI</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Innovate
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Blockchain</li>
              <li>Engineering Services</li>
              <li>Internet of Things (IoT)</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Accelerate
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Enterprise Agile DevOps</li>
              <li>API Economy & Microservices</li>
              <li>Application Modernization</li>
              <li>Digital Process Automation</li>
              <li>Microsoft Business Application Services</li>
            </ul>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Assure
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Cyber Security</li>
              <li>Quality Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
