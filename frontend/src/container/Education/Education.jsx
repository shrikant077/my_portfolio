import React from 'react'
import './Education.scss'
import { images } from '../../constant'
import { useRef } from "react";
import { useInView } from 'framer-motion';
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} id='education' className="education_container">
      <h2 className="head-text">My Education</h2>
      {isInView && <div  className="timeline">
        <div className="itemcontainer left-container" >
          <img src={images.school} alt=''/>
          <div className="text-box">
            <h2>Secondary</h2>
            <h4>The Central Modern School, Barasat</h4>
            <small>Kolkata, West Bengal, India</small>
            <h6>ICSE 2019</h6>
          </div> 
          <span className="left-container-arrow"></span>
        </div>

        <div className='itemcontainer right-container'>
          <img src={images.college} alt=''/>
          <div className="text-box">
            <h2>Higher Secondary</h2>
            <h4>Aditya Academy Secondary, Barasat</h4>
            <small>Kolkata, West Bengal, India</small>
            <h6>CBSE 2021</h6>
          </div> 
          <span className="right-container-arrow"></span>
        </div>

        <div className='itemcontainer left-container'>
          <img src={images.graduation} alt=''/>
          <div className="text-box">
            <h2>Graduation</h2>
            <h4>Techno Main Salt Lake, Sector-V</h4>
            <small>Kolkata, West Bengal, India</small>
            <p><h6>B.Tech in Information Technology</h6>2021 - 2025(expected)</p>
          </div> 
          <span className="left-container-arrow"></span>
        </div>

      </div>}
    </div>
  )
}

export default Education
