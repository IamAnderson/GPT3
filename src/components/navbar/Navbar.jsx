import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { Slide } from 'react-reveal'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <motion.p
        initial={{
          x: -1500,
        }}

        animate={{
          x: 0
        }}

        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 0.8
        }}
      ><a href='#home'>Home</a>
    </motion.p>

     <motion.p
        initial={{
          x: -1500,
        }}

        animate={{
          x: 0
        }}

        transition={{
          type: 'spring',
          duration: 2.4,
          delay: 1.0
        }}
      ><a href='#whatgpt3'>What is GPT3?</a>
    </motion.p>

    <motion.p
        initial={{
          x: -1500,
        }}

        animate={{
          x: 0
        }}

        transition={{
          type: 'spring',
          duration: 2.6,
          delay: 1.2
        }}
      > <a href='#possibility'>Open AI</a> 
    </motion.p>

    <motion.p
        initial={{
          x: -1500,
        }}

        animate={{
          x: 0
        }}

        transition={{
          type: 'spring',
          duration: 2.8,
          delay: 1.4
        }}
      > <a href='#features'>Case Studies</a> 
    </motion.p>

    <motion.p
        initial={{
          x: -1500,
        }}

        animate={{
          x: 0
        }}

        transition={{
          type: 'spring',
          duration: 3,
          delay: 1.6
        }}
      > <a href='#blog'>Library</a> 
    </motion.p>
    </>
  );

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <motion.div className='gpt3__nav-links_logo'
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            duration: 1,
            type: 'spring',
            delay: 4
          }}
        >
          <img src={logo} alt= 'logo' />
        </motion.div>

        <div className='gpt3__navbar-links_container'>
            <Menu />
        </div>
      </div>
      <motion.div className='gpt3__navbar-sign'
      initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            duration: 1,
            type: 'spring',
            delay: 4
          }}
        >
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </motion.div>

      <div className='gpt3__navbar-menu'>
          {toggleMenu 
            ? 
              <RiCloseLine color='#fff' fontSize='27px' onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' fontSize='27px' onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                < Menu/>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar