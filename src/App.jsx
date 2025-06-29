import { useState, useRef } from 'react';
import './App.css';
import logo1 from './assets/VQM-logo-1.png';
import logo2 from './assets/VQM-logo-2.png';
import logo3 from './assets/vqm-logo-3.png';
import avatar1 from './assets/vqm-avatar-1.png';
import avatar2 from './assets/vqm-avatar-2.png';
import avatar3 from './assets/vqm-avatar-3.png';
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import ColorSwitcher from './ColorSwitcher'; // Import the new component
import resumePDF from './assets/Resume-VuongQuyenMai-Jan2025-green.pdf'; // Import the PDF file
import Skillset from './Skillset'; // <-- Import Skillset

const VqmLogo = () => {
  return (
    <div className="vqm-logo">
      <a href="https://revoloero.github.io">VQM</a>
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <div className="message-wrap">
      <span></span>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <ColorSwitcher />
      <div className="contact-links">
        <a href="mailto: vuongquyenmai@gmail.com"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/vuong-quyen-mai/"><SiLinkedin /></a>
        <a href="https://github.com/RevoloerO"><SiGithub /></a>
      </div>
    </div>
  );
};

const Title = () => (
  <div className="title">
    <h1> &lt;Vuong Quyen Mai&gt;</h1>
    <h3 id="type1"> &lt; Blockchain & Full-stack Web Developer &gt; </h3>
    <h3 id="type2"> &lt; Master's degree in Information Systems &gt;</h3>
    <h3 id="type3"> &lt; Bachelor's degree in Computer Science &gt;</h3>
  </div>
);

const Introduction = () => (
  <div className="introduction">
    <section className="intro-section">
      <p>
        With a strong background in MERN full-stack development, I have built dynamic
        and efficient web applications. Now, I am transitioning into blockchain development,
        focusing on Ethereum, Solidity, and Web3.js. My goal is to bridge traditional web
        solutions with decentralized technologies, creating secure and transparent dApps
        that drive innovation in the digital space
      </p>
    </section>
    <div className="section-divider"></div>
    <div className="projects-showcase" style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <section className="project-section">
          <div className="project-item">
            <a href="https://revoloero.github.io/vqm-countries-info/">[[ Country Info App]]</a>
            <div className="project-description">Explore detailed information about countries worldwide.</div>
          </div>
        </section>
        <section className="project-section">
          <div className="project-item">
            <a href="https://revoloero.github.io/csu-ist621-waste-wise/">[[ Waste Wise App ]]</a>
            <div className="project-description">
              WasteWise is a web application designed to reduce food waste by connecting donors and recipients. 
              It leverages geolocation, AI, and blockchain for efficient food redistribution and transparency.
              <br />
              <strong>Features:</strong>
              <ul>
                <li>AI-Powered Predictions</li>
                <li>Blockchain Integration</li>
                <li>Interactive Dashboard</li>
                <li>Geolocation Matching</li>
                <li>Regulation Guidelines</li>
                <li>User Management</li>
              </ul>
              <strong>Tech Stack:</strong> 
              React | React Router | Google Maps API | Blockchain (ethers.js) | CSS | Vite | 
              @vis.gl/react-google-maps | Chart.js | PapaParse
            </div>
          </div>
        </section>
        <section className="project-section">
          <div className="project-item">
            <a href="https://revoloero.github.io/vqm-mai-genealogy/">[[ Genealogy App ]]</a>
            <div className="project-description">
              An interactive family tree application showcasing the genealogy of the Mai family.
              It features:
              <ul>
                <li>Multi-language support (Vietnamese and English)</li>
                <li>Responsive design for all devices</li>
                <li>Smooth animations for an engaging user experience</li>
              </ul>
              <strong>Tech Stack:</strong> React.js | React Router | Vite | CSS | JSON | JavaScript
            </div>
          </div>
        </section>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <section className="project-section">
          <div className="project-item">
            <a href="https://revoloero.github.io/vqm-TradeWarX/">[[ TradeWarX ]]</a>
            <div className="project-description">
              vqm-TradeWarX is a web-based simulation tool I developed to model the U.S.–China trade war 
              through the lens of game theory. It allows users to explore strategic scenarios, visualize payoffs, 
              and understand real-world international conflict using interactive matrices and economic modeling.
            </div>
          </div>
        </section>
        <section className="project-section">
          <div className="project-item">
            <a href="https://revoloero.github.io/vqm-mini-games">[[ VQM Mini Games ]]</a>
            <div className="project-description">
              A modern browser-based collection of interactive mini-games for experimenting with game logic, physics, and UI. Features light/dark theming, milestone tracking, and a responsive design.
              <br />
              <strong>Mini-games:</strong>
              <ul>
                <li>Mouse Stalker: Grow a dragon that follows your mouse.</li>
                <li>Blooming Garden: Slide and match flower tiles in an isometric garden.</li>
              </ul>
              <strong>Tech:</strong> React, Vite, React Router, CSS Modules, Lucide React
            </div>
          </div>
        </section>
        <section className="project-section">
          <div className="project-item">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">[[ Resume - 2025 ]]</a>
            <div className="project-description">View my latest resume showcasing my skills and experience.</div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

const Banner = () => {
  const [flipIndex, setFlipIndex] = useState(0); // 0: logo, 1: logo2, 2: avatar
  const [animating, setAnimating] = useState(false);
  const imgRef = useRef(null);

  const images = [logo1,avatar2, logo3, avatar1 ,logo2 ,avatar3];

  const handleFlip = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setFlipIndex(idx => (idx + 1) % images.length);
      setTimeout(() => setAnimating(false), 300); // match animation duration
    }, 150); // halfway through animation
  };

  return (
    <div className="banner">
      <ContactBar />
      <div className="banner-welcome">
        <VqmLogo />
        <WelcomeMessage />
      </div>
      <div className="banner-title">
        <Title />
      </div>
      <div className="banner-detail">
        <Introduction />
      </div>
      <div className="footer">
        <img
          src={images[flipIndex]}
          alt="vqm-logo-img"
          id="footer-img"
          ref={imgRef}
          className={animating ? "coin-flip" : ""}
          onClick={handleFlip}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Banner />
      <Skillset /> {/* <-- Add Skillset floating button/panel */}
    </>
  );
};

export default App;
// App.jsx
// This is the main entry point of the application.
// It imports necessary components and styles, and renders the main layout including the banner and skillset
// The App component serves as the root component for the React application.


