import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Images
import homeImg1 from '../img/home1.png';

//animtion framer motion
import {motion} from 'framer-motion'


const AboutSection = () => {

  const titleAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration:2
      }
    }
  }

  const container = {
    hidden:{
      x:100
    },
    show: {
      x:0,
      
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren"
      }
    }
  }
  const peraAnim = {
    hidden: {
      x:10,
      opacity: 0
    },
    show:{
      x:0,
      opacity: 1,
      transition: {
        duration:1.25,
        
      }
    }
  }
  return (
    <About>
      <Description>
        <motion.div variants={container} animate="show" initial="hidden" className="title">
          <Hide>
            <motion.h2 variants={titleAnim} animate="show" initial="hidden">We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} animate="show" initial="hidden">
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={peraAnim} initial="hidden" animate="show">true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={homeImg1} alt="camera guy" />
      </Image>
      
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
