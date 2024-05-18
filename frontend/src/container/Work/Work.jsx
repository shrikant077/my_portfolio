import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constant'
import './Work.scss';
const Work = () => {

  return (
    <>
      <div id='work' style={{ backgroundColor: 'rgb(225 229 255)', padding: '2rem 0' }}>
        <div className='container'>
          <h2 className="head-text">Projects</h2>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__project-img my-5">
            <img
              src={images.projectlogo}
              alt='profile_circle'
              style={{ borderRadius: '50%', width: '160px' }}
            />
            <h2 style={{ color: "#000d9b" }}>Here's What I've been up to.</h2>
          </motion.div>
          <div className="app__project-container container">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="project_container" style={{alignItems: "center"}}>
              <img className='img-fluid' src={images.cloudimg} alt="" width={"450px"} style={{ margin: "2rem" , height:"fit-content"}} />
              <div className='project_info'>
                <h1>CloudNotes</h1>
                <p>Unlock the power of seamless note-taking with our cloud-based app! Securely store your thoughts, ideas, and reminders, accessible from anywhere with just a login. User-friendly and ultra-convenient, it's your go-to for capturing inspiration on the fly!.</p>
                <div className='project_links'>
                  <a className="githubview btn btn-primary" href='https://github.com/shrikant077/cloudnotes'>
                    <p>View on Github</p>
                  </a>
                  <a className="liveview btn btn-primary" href='https://ecloudnotes.netlify.app/'>
                    <p>Live Demo</p>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="project_container" style={{alignItems: "center"}}>
              <img className='img-fluid' src={images.portfolioimg} alt="" width={"450px"} style={{ margin: "2rem" , height:"fit-content"}} />
              <div className='project_info'>
                <h1>Portfolio</h1>
                <p>Experience a portfolio website that embodies minimalism and responsiveness, where every detail is meticulously crafted to perfection. Subtle yet sophisticated animations elevate the user interface, creating an engaging browsing experience.</p>
                <div className='project_links'>
                  <a className="githubview btn btn-primary" href='https://github.com/shrikant077/my_portfolio'>
                    <p>View on Github</p>
                  </a>
                  <a className="liveview btn btn-primary" href='https://shrikantmanikgaikwad.netlify.app/'>
                    <p>Live Demo</p>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="project_container" style={{alignItems: "center"}}>
              <img className='img-fluid' src={images.howdy} alt="" width={"450px"} style={{ margin: "2rem" , height:"fit-content"}} />
              <div className='project_info'>
                <h1>Howdy</h1>
                <p>Step into our dynamic chatroom where connections are made across devices! Join the conversation anytime, anywhere, and dive into lively group chats with friends or fellow enthusiasts. With full responsiveness, the chat never stops—keeping you engaged and connected like never before!.</p>
                <div className='project_links'>
                  <a className="githubview btn btn-primary" href='https://github.com/shrikant077/Howdy'>
                    <p>View on Github</p>
                  </a>
                  <a className="liveview btn btn-primary" href='https://howdy-bjud.onrender.com/'>
                    <p>Live Demo</p>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
