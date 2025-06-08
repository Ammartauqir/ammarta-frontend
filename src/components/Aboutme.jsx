import React from "react";

const AboutMe = () => {
  return (
    <section
      className="relative bg-zinc-100 dark:bg-zinc-900 py-20 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      {/* Subtle contour background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-zinc-800 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Background */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Background</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I’m Ammar Tauqir — a software engineer and tech creator based in Germany. I run
              <span className="font-medium text-zinc-900 dark:text-white"> myStudyDreams</span> and
              <span className="font-medium text-zinc-900 dark:text-white"> Blueberry Imaginations</span>, blending tech, education, and creativity.
            </p>
          </div>

          {/* Programming */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Programming</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              My main languages are <span className="font-medium">Python</span>, <span className="font-medium">JavaScript</span>, and
              <span className="font-medium"> TypeScript</span>. I enjoy building full-stack apps using
              <span className="font-medium"> React</span>, <span className="font-medium">Flask</span>, and deploying with modern DevOps workflows.
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">AI & Machine Learning</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I specialize in building agentic AI systems using <span className="font-medium">LangGraph</span>, and real-time AI pipelines involving
              <span className="font-medium"> RGB + thermal fusion</span>. I'm also exploring creative AI for image and video generation.
            </p>
          </div>

          {/* Robotics */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Robotics</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I'm into RC planes, autonomous control systems, and real-time sensor fusion. I work with motors, ESCs, servos, and custom controllers to build responsive robotic setups.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="group relative inline-flex items-center text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 px-6 py-3 rounded font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300">
            Learn More About Me
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            <span className="font-bold ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="M12 5 7 7-7 7"></path>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
