import React from 'react'
import styled from 'styled-components'
import {About} from '../styles';
import Toggle from '../components/Toggle'
import { AnimateSharedLayout } from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollRev} from '../animations';

const FaqSection = () => {

  const [element, controls] = useScroll();

  return (

    <Faq variants={scrollRev} animate={controls} initial="hidden" ref={element}>

      <h2>Any questions <span>Faq</span></h2>

      <AnimateSharedLayout>

      <Toggle title="how do i start">
  
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
          </div>
    
      </Toggle>

      <Toggle title="how do i start 2">
   
        

        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
        </div>

    
      </Toggle>
   

   
      <Toggle title="how do i start 3">
    
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eum?</p>
        </div>
        

      </Toggle>
      </AnimateSharedLayout>

    </Faq>
  )
}


const Faq = styled(About)`
  display: block;
  span{
    display:block;
  }
  h2{
    padding: 10px;
  }
  h4{
    font-size: 22px;
    padding:15px 0;
  }
  .question{
    padding: 15px 0;
    cursor: pointer;
  }
  p{
    padding:10px 0;
  }
  .answer{
    padding: 10px 0;
  }
  .faq-line{
    border-bottom: 1px solid #fff;
  }
  
`;


export default FaqSection
