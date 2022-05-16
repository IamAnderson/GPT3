import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <motion.div className='gpt3__header-content'
        
          initial={{
            x:-900
          }}
          animate={{
            x: 0
          }}

        transition={{
          type: 'spring',
          duration: '2s',
          
        }}
        >
          <motion.h1 className='gradient__text'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 4
          }}
          >
            Let's Build Something amazing with GPT-3 OpenAI
          </motion.h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus et ipsa ipsum atque aperiam maxime perferendis aspernatur impedit dolor earum possimus placeat commodi, quisquam aut labore voluptatum! Laborum, sapiente!</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address'/>
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1600 people requested access in the last 24 hours</p>
          </div>
        </motion.div>
        <motion.div className='gpt3__header-image'
        
          initial={{
            x:900
          }}
          animate={{
            x: 0
          }}

        transition={{
          type: 'spring',
          duration: '2s',
          
        }}
        >
          <motion.img src={ai} alt='ai' 
            drag
            dragConstraints={{
              right: 0,
              left: 0,
              top: 0,
              bottom: 0
            }}
            dragElastic={0.2}
          />
        </motion.div>
    </div>
  )
}

export default Header