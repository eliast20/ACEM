import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    window.location.href = 'https://www.instagram.com/_culleyandrew/?hl=en';
  };

  return (
    <>
    <h1 className='new'>ACEM</h1>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <h2>
          Emails:{" "}
          <a href="mailto:charlie@wilfredwinston.com">charlie@wilfredwinston.com</a>,{" "}
          <a href="mailto:Alberto@newarrivalsgallery.com" className='chiken'>Alberto@newarrivalsgallery.com</a>
        </h2>
        <h3>
          Instagram:{" "}
          <a href="https://www.instagram.com/acem_atelier/">acem_atelier</a>
        </h3>
        <h4 className='phone-number'>Phone: +1 888 288 3033</h4>
      </div>
    </>
  );
}

export default App;

