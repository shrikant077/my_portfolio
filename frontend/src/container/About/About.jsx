
import React, { useState, useEffect } from 'react';
import './About.scss'
// import { images } from '../../constant'
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
const About = () => {
  const [abouts, setAbouts] = useState([]);

  const fetchData = async () => {
    try {
      const query = '*[_type == "abouts"]';  

      const data = await client.fetch(query);
  
      setAbouts(data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // const query = '*[_type == "about"]';
    fetchData();
  }, []);
  return (
    <>
      <motion.h2 id='about' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 1 }} className="head-text" style={{marginTop: '5rem', color: 'black'}}>I Know that <span>Good Design</span> <br />means  <span>Good Business</span></motion.h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
