import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem " />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imaginations</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem"/>
        <Feature title="Knowledgebase" text="lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem"/>
        <Feature title="Education" text="lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem lorem opsem"/>
      </div>
    </div>
  )
}

export default WhatGPT3
