import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constant';
// import {Link} from 'react-router-dom'
import './Footer.scss';


const Footer = () => {


  return (
    <>
      <div id='contact' style={{ padding: '2rem 0' }}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h2 className="head-text">Take a coffee & chat with me</h2>
          <motion.div
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__footer-cards">
            <div className="app__footer-card">
              <img src={images.email} alt="email" height={"40px"} width={"40px"} />
              <a href="mailto:shrikantmanikgaikwad@gmail.com" className="p-text">shrikantmanikgaikwad@gmail.com</a>
            </div>
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" height={"40px"} width={"40px"} />
              <a href="tel:+91 9330560910" className="p-text">+91 9330560910</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <footer className="footer-wrap container-fluid">
        <div className="app__footer container text-center">
          <motion.ul className="footer__items container"
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <li><a href="https://github.com/shrikant077">Github</a></li>
            <li ><a href="https://www.linkedin.com/in/shrikant07/">LinkedIn</a></li>
            <li><a href="https://leetcode.com/shrikant07/">LeetCode</a></li>
            <li><a href="https://auth.geeksforgeeks.org/user/shrikant_07/">GfG</a></li>
          </motion.ul>
          <motion.p
            whileInView={{ y: [5, -5], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >&copy; Shrikant Manik Gaikwad - 2024 - [All rights reserved]</motion.p>
        </div>
      </footer> */}

      <footer className="footer-wrap bg-body-tertiary text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <div className="app__footer container p-4 pb-0">
          <motion.ul className="footer__items container"
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <li><a href="https://github.com/shrikant077">Github</a></li>
            <li ><a href="https://www.linkedin.com/in/shrikant07/">LinkedIn</a></li>
            <li><a href="https://leetcode.com/shrikant07/">LeetCode</a></li>
            <li><a href="https://auth.geeksforgeeks.org/user/shrikant_07/">GfG</a></li>
          </motion.ul>
          <motion.p
            whileInView={{ y: [5, -5], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >&copy; Shrikant Manik Gaikwad - 2024 - [All rights reserved]</motion.p>
        </div>
      </footer>

    </>
  );
};

export default Footer
