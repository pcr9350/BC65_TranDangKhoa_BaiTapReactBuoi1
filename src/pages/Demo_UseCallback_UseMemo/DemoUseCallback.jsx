import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const DemoUseCallback = () => {
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    const renderLike = ()=>{
        return <i className='fa fa-heart'>{like}</i>
    }
    const callbackRenderLike = useCallback(renderLike,[like])
    // useCallback dùng để cache lại giá trị của hàm , khi dependency thay đổi thì hàm useCallback sẽ tạo lại phương thức mới 
  return (
    <div className='container'>
        <h3>Use Callback Demo</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number+1)
        }}>{number}</button>
        <button className='ml-2 btn btn-success' onClick={()=>{
            setLike(like+1)
        }}>Like</button>
        <ChildComponent renderLike = {callbackRenderLike}/>
    </div>
  )
}

export default DemoUseCallback