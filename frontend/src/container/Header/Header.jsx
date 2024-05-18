import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constant'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h3 >Shrikant Manik Gaikwad</h3>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        
        <motion.img className='img-fluid'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
          src={images.profile}
          alt='profile_circle'
          style={{ borderRadius: '50%', width: '350px', boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles img-fluid"
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex img-fluid" key={`circle-${index}`}>
            <img className='img-fluid' src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header
