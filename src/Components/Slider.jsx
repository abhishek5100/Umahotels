import React from 'react'
import "./Slider.css"
import { Carousel } from 'antd';
import  pic1  from "./images/images-1.jpg"

import Forms from './Forms';

function Slider() {

    const contentStyle = {
        height: "auto",
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div>
              
                <Carousel className='carousel'  autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src={pic1} alt="" />
        </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={pic1} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={pic1} alt="" />
      </h3>
    </div>
   
  </Carousel>
                 <Forms/>
               </div>
         
   
  )
}

export default Slider
