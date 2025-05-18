import profileImage from '../assets/AmmarTauqir_crop.jpg'; // Put your image here
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white duration-300 min-h-screen flex flex-col justify-center items-center pt-24 text-center px-4">
      <img
        src={profileImage}
        alt="Profile"
        className="w-30 h-30 rounded-full border-4 dark:border-white mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I'm Ammar</h1>
      <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-6">

        Software Engineer and AI enthusiast
      </p>
      <div className="space-x-4">
        <a href="#contact" className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200">
          Get in Touch
        </a>
        <a href="#projects" className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-black">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
