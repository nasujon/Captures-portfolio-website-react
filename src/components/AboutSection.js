import React from 'react'
import heroImg1 from '../img/home1.png';
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Welcome to </h2>
          </div>
          <div className="hide">
            <h2><span>Our</span> youtube </h2>
          </div>
          <div className="hide">
            <h2>channel </h2>
          </div>
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sunt ea facere nesciunt possimus suscipit odio numquam velit molestias quidem.</p>
        <button>Get started</button>
      </div>
      <div className="side-img">
        <img src={heroImg1} alt="dsd" />
      </div>
    </div>
  )
}

export default AboutSection
