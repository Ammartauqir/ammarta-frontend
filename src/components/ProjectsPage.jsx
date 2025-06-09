import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-zinc-950 pt-24 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-zinc-800 dark:text-white">All Projects</h1>
        
        <div className="space-y-12">
          {/* AI Study Assistant */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">AI-Powered Study Assistant</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  A comprehensive study tool that leverages artificial intelligence to help students learn more effectively. 
                  The system uses natural language processing and machine learning to create personalized learning experiences.
                </p>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>Smart note-taking with AI summarization</li>
                  <li>Personalized study plans based on learning patterns</li>
                  <li>Interactive quizzes and flashcards</li>
                  <li>Progress tracking and analytics</li>
                  <li>Natural language question answering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Technical Details</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>Built with Python and TensorFlow</li>
                  <li>Uses GPT-4 for content generation</li>
                  <li>React frontend with TypeScript</li>
                  <li>MongoDB for data storage</li>
                  <li>Docker containerization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autonomous RC Plane */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">Autonomous RC Plane</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  A custom-built RC plane with full autonomous capabilities, designed for research and educational purposes.
                  The system combines various sensors and control systems to achieve stable autonomous flight.
                </p>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>GPS-based navigation system</li>
                  <li>Real-time sensor fusion</li>
                  <li>Custom flight controller</li>
                  <li>Autonomous takeoff and landing</li>
                  <li>Waypoint navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Technical Details</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>ArduPilot firmware</li>
                  <li>Python-based ground control station</li>
                  <li>Custom PCB design for sensor integration</li>
                  <li>ROS for sensor fusion</li>
                  <li>3D-printed components</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thermal Vision System */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">Thermal Vision System</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  An advanced computer vision system that combines RGB and thermal imaging for enhanced object detection
                  and analysis. The system is designed for industrial and security applications.
                </p>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>Real-time image fusion</li>
                  <li>Object detection and tracking</li>
                  <li>Temperature analysis</li>
                  <li>Anomaly detection</li>
                  <li>Multi-camera synchronization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Technical Details</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>OpenCV and PyTorch implementation</li>
                  <li>Custom neural network architecture</li>
                  <li>CUDA acceleration</li>
                  <li>REST API for integration</li>
                  <li>Real-time processing pipeline</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Smart Home Automation */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">Smart Home Automation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Overview</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  A comprehensive home automation system that integrates various smart devices and uses AI to optimize
                  home operations. The system focuses on energy efficiency and user comfort.
                </p>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Key Features</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>Voice control interface</li>
                  <li>Energy optimization</li>
                  <li>Security monitoring</li>
                  <li>Automated climate control</li>
                  <li>Smart lighting system</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white">Technical Details</h3>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li>Home Assistant integration</li>
                  <li>MQTT protocol for device communication</li>
                  <li>Node.js backend</li>
                  <li>React Native mobile app</li>
                  <li>Custom machine learning models for optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 