import React, { useState, memo, useMemo } from 'react'

const ChildComponent = memo((props) =>{
    console.log('render child')
    return <div className='bg-dark text-white p-2 mt-2'>
        {props.arr.toString()}
    </div>
})

const arr = [1,2,3,4];

const DemoUseMemo = () => {
    const [number, setNumber] = useState(1);
    // const arr = [1,2,3,4];
    // const memoArr = useMemo(()=> arr, []);
  return (
    <div className='container'>
        <h3>Parent component</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number+1)
        }}>{number}</button>
        {/* <ChildComponent arr={memoArr} /> */}
        <ChildComponent arr={arr}/>
    </div>
  )
}

export default DemoUseMemo