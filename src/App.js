import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FullName from './FullName';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/info")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-950 dark:text-white duration-300">
    <Header></Header>
    <Hero></Hero>

    <section className="section">
      <h2 className="font-bold" >Summary</h2>
      <p>Email: ammar.tauqir2@gmail.com | Phone: +4917673209858 | Location: Ingolstadt, Germany</p>
      <p>Software Engineer with experience in automotive and embedded systems.</p>
    </section>

    <section className="section">
      <h2  className="font-bold" >Experience</h2>
      <p><strong>Software Developer:</strong> E.Solutions GmbH (Nov 2022 -- Continued) Ingolstadt, Germany</p>
      <ul>
        <li>Working on automotive infotainment system testing tools development.</li>
      </ul>

      <p><strong>Engineering Consultant</strong> Alten GmbH (Nov 2021 -- Nov 2022) Ingolstadt, Germany</p>
      <ul>
        <li>Working as an external in E.Solutions GmbH, on automotive infotainment system development and testing.</li>
      </ul>

      <p><strong>Internship & Master Thesis</strong> Continental AG (ADAS) (Nov 2020 -- Aug 2021) Neu-Ulm, Germany</p>
      <ul>
        <li>Performed LIDAR point-cloud semantic segmentation using ML algorithms.</li>
      </ul>

      <p><strong>Research Assistant</strong> TU Dortmund (FLW - InnovationLab) (Mar 2019 -- Oct 2020) Dortmund, Germany</p>
      <ul>
        <li>Worked on development of camera-based localization system for logistic halls.</li>
      </ul>

      <p><strong>Embedded Systems Engineer</strong> AVIACELL Technologies GmbH (Aug 2017 -- Oct 2018) Lahore, Pakistan</p>
      <ul>
        <li>Worked on algorithm development of ADAS systems on embedded ECUs.</li>
      </ul>

      <p><strong>Internship</strong> Space & Upper Atmosphere Research Comm. (June 2017 -- Sep 2017) Lahore, Pakistan</p>
      <ul>
        <li>Deployed troposphere impairment prediction model for satellite signals.</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="font-bold" >Education</h2>
      <p><strong>M.Sc. Automation & Robotics (Grade: 1.9)</strong> - TU Dortmund, Germany (Oct 2018-- Aug 2021) <strong>Thesis:</strong> LIDAR pointcloud Semantic Segmentation</p>
      <p><strong>B.Sc. Electrical Engineering (Grade: 1.6)</strong> - University of the Punjab, Pakistan (Nov 2013 -- Mar 2017) <strong>Thesis:</strong> Autonomous path planning for mobile robots</p>
    </section>

    <section className="section">
      <h2  className="font-bold">Skills</h2>
      <ul>
        <li>Python</li>
        <li>C/C++</li>
        <li>Linux</li>
        <li>SQL</li>
        <li>React, Node.js</li>
        <li>Raspberry Pi</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="font-bold">Interests</h2>
      <ul>
        <li>Embedded Systems</li>
        <li>Robotics</li>
        <li>Machine Learning</li>
        <li>Sensor Fusion</li>
        <li>Autonomous Driving</li>
        <li>Automotive Systems</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="font-bold">Publications</h2>
      <ul>
        <li>[1] A. Tauqir, B. Wang (2021). LIDAR Semantic Segmentation Cross-Dataset Learning and Evaluation. IEEE ICRA 2022.</li>
        <li>[2] Huang, Y., Wu, Ammar T., et al. (2020). Perception vs. Reality - IPSN 2020.</li>
        <li>[3] Shakeel-ur-Rehman, Tauqir, M. A., et al. (2017). Performance Analysis in Satellite-Earth Systems. IJCSNS.</li>
        <li>[4] Ullah, A., Tauqir, M. A., et al. (2016). Motion Planning Techniques. ICOSST 2016.</li>
        <li>[5] Khan, M. K., Tauqir, A., et al. (2016). Surveillance Quadcopter Design. JQTM.</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="font-bold">Projects</h2>
      <ul>
        <li>LIDAR semantic segmentation: Point-wise classification, voxelization, 3D convnet.</li>
        <li>Breathing pattern detector: Used thermal camera and nose tracking for inhale/exhale detection.</li>
        <li>Camera based pose estimation: Multi-view triangulation and object detection.</li>
        <li>Indoor security system: Camera & Bluetooth localization and cross verification.</li>
        <li>Robot path planning: Potential field and genetic optimization algorithms.</li>
        <li>Speed-cam: Car speed estimation via tracking and frame differential.</li>
        <li>Visual SLAM: Monocular camera-based SLAM with loop closure.</li>
        <li>Lane departure warning: HAAR classifier, perspective transform and curvature fitting.</li>
        <li>Image dehazing: Dark-Channel Prior algorithm for improved visibility.</li>
      </ul>
    </section>
  </div>
  );
}

export default App;
