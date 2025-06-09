import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-950 dark:text-white duration-300 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Profile</h2>
          <p className="text-lg mb-4">
            I am a Software Engineer specializing in automotive and embedded systems, currently based in Ingolstadt, Germany. 
            With a strong foundation in both electrical engineering and software development, I bring a unique perspective 
            to solving complex technical challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p>Email: ammar.tauqir2@gmail.com</p>
              <p>Phone: +4917673209858</p>
              <p>Location: Ingolstadt, Germany</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="font-semibold mb-2">Education</h3>
              <p><strong>M.Sc. Automation & Robotics (Grade: 1.9)</strong></p>
              <p>TU Dortmund, Germany (2018-2021)</p>
              <p><strong>B.Sc. Electrical Engineering (Grade: 1.6)</strong></p>
              <p>University of the Punjab, Pakistan (2013-2017)</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-2">Software Developer</h3>
              <p className="text-zinc-600 dark:text-zinc-300">E.Solutions GmbH (Nov 2022 - Present)</p>
              <p className="mt-2">• Developing testing tools for automotive infotainment systems</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-2">Engineering Consultant</h3>
              <p className="text-zinc-600 dark:text-zinc-300">Alten GmbH (Nov 2021 - Nov 2022)</p>
              <p className="mt-2">• Worked on automotive infotainment system development and testing at E.Solutions GmbH</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-2">Internship & Master Thesis</h3>
              <p className="text-zinc-600 dark:text-zinc-300">Continental AG (ADAS) (Nov 2020 - Aug 2021)</p>
              <p className="mt-2">• Implemented LIDAR point-cloud semantic segmentation using ML algorithms</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-2">Research Assistant</h3>
              <p className="text-zinc-600 dark:text-zinc-300">TU Dortmund (FLW - InnovationLab) (Mar 2019 - Oct 2020)</p>
              <p className="mt-2">• Developed camera-based localization system for logistic halls</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-2">Embedded Systems Engineer</h3>
              <p className="text-zinc-600 dark:text-zinc-300">AVIACELL Technologies GmbH (Aug 2017 - Oct 2018)</p>
              <p className="mt-2">• Developed algorithms for ADAS systems on embedded ECUs</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-3">Core Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Python Development</li>
                <li>C/C++ Programming</li>
                <li>Linux Systems</li>
                <li>SQL Databases</li>
                <li>React & Node.js</li>
                <li>Raspberry Pi</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-xl font-medium mb-3">Specializations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Embedded Systems</li>
                <li>Robotics</li>
                <li>Machine Learning</li>
                <li>Sensor Fusion</li>
                <li>Autonomous Driving</li>
                <li>Automotive Systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research & Publications</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <p className="mb-2">[1] A. Tauqir, B. Wang (2021). LIDAR Semantic Segmentation Cross-Dataset Learning and Evaluation. IEEE ICRA 2022.</p>
              <p className="mb-2">[2] Huang, Y., Wu, Ammar T., et al. (2020). Perception vs. Reality - IPSN 2020.</p>
              <p className="mb-2">[3] Shakeel-ur-Rehman, Tauqir, M. A., et al. (2017). Performance Analysis in Satellite-Earth Systems. IJCSNS.</p>
              <p className="mb-2">[4] Ullah, A., Tauqir, M. A., et al. (2016). Motion Planning Techniques. ICOSST 2016.</p>
              <p>[5] Khan, M. K., Tauqir, A., et al. (2016). Surveillance Quadcopter Design. JQTM.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <ul className="list-disc list-inside space-y-2">
                <li>LIDAR semantic segmentation with point-wise classification and 3D convnet</li>
                <li>Breathing pattern detector using thermal camera and nose tracking</li>
                <li>Camera-based pose estimation with multi-view triangulation</li>
                <li>Indoor security system with camera & Bluetooth localization</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Robot path planning with potential field and genetic optimization</li>
                <li>Car speed estimation via tracking and frame differential</li>
                <li>Visual SLAM with monocular camera and loop closure</li>
                <li>Lane departure warning using HAAR classifier and curvature fitting</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage; 