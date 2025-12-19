import React from 'react';
import ReactTypingEffect from "react-typing-effect"
import TypingText from '../../../TypingText';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aditya Verma
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#ec9b45]">
              <TypingText />
            </span>
            
          
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 3 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and modern
            technologies to create seamless user experiences and efficient
            solutions.
            
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1cWeZWp6_bIw9Al3otQ08x8rt-BHHBoBr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
