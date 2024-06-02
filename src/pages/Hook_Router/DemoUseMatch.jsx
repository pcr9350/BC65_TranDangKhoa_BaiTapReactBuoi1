import React from 'react'
import { useLocation, useMatch, useMatches } from 'react-router-dom'

const DemoUseMatch = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div className='container'>
        <h3>DemoUseMatch</h3>
        </div>
  )
}

export default DemoUseMatch