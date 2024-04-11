import React from 'react'
// import css toàn website
import '../assets/css/style.css'
// import css module
import style from './styleWithComponent.module.css'

const StyleWithComponent = () => {
  return (
    <div className='container'>
        <p className={`${style['text-green']} bg-primary`}>Lorem ipsum dolor sit amet.</p>
        <p className='text-red'>Lorem ipsum dolor sit amet.</p>
        <p style={{fontSize:'20px', paddingTop:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero aspernatur voluptas quisquam voluptates quia?</p>
    </div>
  )
}

export default StyleWithComponent