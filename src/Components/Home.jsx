import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Ravi_Cv_(prsnl).pdf';
import hero from './Data/hero.json';
import Typed from 'typed.js';
import './Style/Home.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio",
        "My Name is Ravi Rao",
        "I'm a Full Stack Developer"
      ],
      typeSpeed: 70,  
      backSpeed: 50,   
      backDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="container Home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-4">
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
