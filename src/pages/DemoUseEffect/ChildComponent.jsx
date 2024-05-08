import React, { useEffect } from 'react'

const ChildComponent = () => {
    console.log('first')
    useEffect(()=>{
        console.log('child useEffect')
    })
  return (
    <div className='bg-dark text-white'>
        Child component
    </div>
  )
}

export default ChildComponent