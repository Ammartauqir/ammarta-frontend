import profileImage from '../assets/AmmarTauqir_crop1.jpg';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-zinc-200 text-dark dark:bg-zinc-950 dark:text-white duration-300 min-h-screen flex flex-col justify-center items-center pt-24 text-center px-4">
      <img
        src={profileImage}
        alt="Profile"
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 dark:border-gray-300 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Ammar</h1>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-xl mb-6">
        Software Developer | Robotics & AI Innovator
      </p>
      <div className="space-x-4">
        <a href="https://huggingface.co/spaces/AmmarTauqir/virtual_resume" className="bg-gray-200 dark:bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-200 transition duration-300">
          AI Resume Bot
        </a>
        <a href="mailto:ammar.tauqir2@gmail.com" className="bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-2 rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
          Get in touch
        </a>
        <a href="#projects" className="bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-2 rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
          View Projects
        </a >

      </div>
    </section>
  );
};

export default Hero;