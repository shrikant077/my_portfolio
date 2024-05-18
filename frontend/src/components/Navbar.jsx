import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { images } from '../constant';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (

        <nav className="app__navbar navbar navbar-expand-lg navbar-light">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'education', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className="app__flex p-text">
                    <div />
                    <a href='https://drive.google.com/file/d/1P1PB63aN3Si1t0OC-dR_w_V3XA5LUiQT/view' target='_blank' rel='noreferrer'>resume</a>
                </li>
            </ul>

            {/* navbar menu for mobiles BEM css naming norm*/}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (<motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {['home', 'education', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                            </li>
                        ))}
                        <li>
                            <a href='https://drive.google.com/file/d/1P1PB63aN3Si1t0OC-dR_w_V3XA5LUiQT/view' target='_blank' rel='noreferrer'>resume</a>
                        </li>
                    </ul>
                </motion.div>)}
            </div>
        </nav>
    )
}

export default Navbar
