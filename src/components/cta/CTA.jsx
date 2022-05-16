import React from 'react';
import { Bounce } from 'react-reveal';
import './cta.css';

const CTA = () => (
  <Bounce><div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <Bounce><h3>Register Today & start exploring the endless possibilities.</h3></Bounce>
    </div>
    <Bounce><div className="gpt3__cta-btn">
      <button type="button">Get Started</button>
    </div></Bounce>
  </div></Bounce>
);

export default CTA;