import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-zinc-200 dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      {/* Subtle contour background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-zinc-800 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">AI-Powered Study Assistant</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              A comprehensive study tool that uses AI to help students learn more effectively. Features include:
            </p>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Smart note-taking with AI summarization</li>
              <li>Personalized study plans</li>
              <li>Interactive quizzes and flashcards</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Autonomous RC Plane</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              A custom-built RC plane with autonomous capabilities. Key features:
            </p>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>GPS-based navigation</li>
              <li>Real-time sensor fusion</li>
              <li>Custom flight controller</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Thermal Vision System</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Advanced computer vision system combining RGB and thermal imaging:
            </p>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Real-time image fusion</li>
              <li>Object detection and tracking</li>
              <li>Temperature analysis</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Smart Home Automation</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              Custom home automation system with AI integration:
            </p>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Voice control interface</li>
              <li>Energy optimization</li>
              <li>Security monitoring</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => navigate('/projects')}
            className="group relative inline-flex items-center text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 px-6 py-3 rounded font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 