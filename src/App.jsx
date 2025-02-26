import { useState } from 'react';
import './App.css';
import './css/vqm-porfolio.css';
import logo from './css/VQM-logo.png';
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import ColorSwitcher from './ColorSwitcher'; // Import the new component
import resumePDF from './assets/Resume-VuongQuyenMai-Jan2025-green.pdf'; // Import the PDF file

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
    <p> With a strong foundation in MERN full-stack development, I have spent years building dynamic, scalable, and efficient web applications for individuals and businesses. My expertise in JavaScript, React, Node.js, and database management has allowed me to craft seamless digital experiences.

    Now, I am expanding my skill set into blockchain development, focusing on Ethereum, Solidity, and Web3.js. My goal is to bridge the gap between traditional web applications and decentralized solutions, leveraging blockchain technology to enhance security, transparency, and efficiency. As I transition into this evolving space, I am dedicated to building smart contracts, DeFi applications, and NFT platforms that empower users and redefine digital interactions.

    This journey represents my commitment to staying at the forefront of innovation—merging my web development expertise with blockchain to create the next generation of decentralized applications (dApps). </p>
    <a href={resumePDF} target="_blank" rel="noopener noreferrer">[[ Resume - January 2025 ]]</a>
    <a href="https://revoloero.github.io/vqm-porfolio-v3/">[[ Resume & Porfolio V3 ]]</a>
    <a href="https://revoloero.github.io/vqm-porfolio-v2/">[[ Resume & Porfolio V2 ]]</a>
    <a href="https://revoloero.github.io/vqm-countries-info/">[[ Country Info App ]]</a>
    </div>
);

const Banner = () => {
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
        <img src={logo} alt="vqm-logo-img" id="footer-img" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default App;
