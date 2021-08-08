import React from 'react'
import Clock from '../img/clock.svg';
import Home2 from '../img/home2.png';

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="servie-img">
        <img src={Home2} alt="" />
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={Clock} alt="" />
            <h2>Efficent</h2>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={Clock} alt="" />
            <h2>Efficent</h2>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={Clock} alt="" />
            <h2>Efficent</h2>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={Clock} alt="" />
            <h2>Efficent</h2>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
