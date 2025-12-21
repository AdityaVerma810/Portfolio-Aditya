import React from "react";
import { education } from "../../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline Items */}
        {education.map((edu, index) => (
          <div key={edu.id} className="relative mb-20 flex">
            
            {/* Timeline Circle (CENTER) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gray-400 border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`relative w-full sm:max-w-md p-6 sm:p-8 rounded-2xl 
              border border-white bg-gray-900 backdrop-blur-md 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transition-transform duration-300 hover:scale-105
              ${
                index % 2 === 0
                  ? "sm:ml-auto sm:mr-[55%]"
                  : "sm:mr-auto sm:ml-[55%]"
              }
              ml-10 sm:ml-0`}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-5">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-300">{edu.school}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-3 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
