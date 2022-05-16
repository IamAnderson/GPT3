import React from 'react';
import { Bounce } from 'react-reveal';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';


const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <Bounce left><div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div></Bounce>
    <div className="gpt3__possibility-content">
      <Bounce right><h4>Request Early Access to Get Started</h4></Bounce>
      <Bounce right><h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1></Bounce>
      <Bounce right><p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p></Bounce>
      <Bounce right><h4>Request Early Access to Get Started</h4></Bounce>
    </div>
  </div>
);

export default Possibility;