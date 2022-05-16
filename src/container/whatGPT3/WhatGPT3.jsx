import React from 'react'
import { Slide } from 'react-reveal'
import { Feature } from '../../components'
import './whatgpt3.css'
import { Bounce } from 'react-reveal';

const WhatGPT3 = () => {
  return (
    <Slide bottom>
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
      <Bounce bottom><div className='gpp3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident obcaecati accusamus ut? Rerum, quia voluptatibus. Cupiditate, quod. Iste, eveniet!'/>
      </div></Bounce>
      <div className='gpt3__whatgpt3-heading'>
        <Bounce bottom><h1 className='gradient__text' >The possibilities are beyond your imagination</h1></Bounce>
        <Bounce bottom><p>Explore the Library</p></Bounce>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Bounce bottom><Feature title='Chartbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident obcaecati accusamus ut? Rerum, quia voluptatibus. Cupiditate, quod. Iste, eveniet!'/></Bounce>
        <Bounce bottom><Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident obcaecati accusamus ut? Rerum, quia voluptatibus. Cupiditate, quod. Iste, eveniet!'/></Bounce>
        <Bounce bottom><Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident obcaecati accusamus ut? Rerum, quia voluptatibus. Cupiditate, quod. Iste, eveniet!'/></Bounce>
      </div>
    </div>
    </Slide>
  )
}

export default WhatGPT3