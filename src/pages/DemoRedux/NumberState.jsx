//rafce
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const NumberState = () => {
    //useSelector: DÙng để lấy dữ liệu từ redux về component
    const {number, fSizeState} = useSelector((state)=> state);
    // useDispatch là hàm dùng để đưa dữ liệu (action) lên redux
    const dispatch = useDispatch();
    const handleLike = ()=> {
        //Gửi dữ liệu lên redux --> action = {type: '', payload:''}
        const action = {
            type: 'LIKE_NUMBER', // thuộc tính bắt buộc phải có và không trùng với action khác
            payload: number + 1
        };
        //Dùng useDispatch đưa dữ liệu lên redux
        dispatch(action);
    }
    
    // const handlePlusFSize = ()=> {
    //     const action = {
    //         type: 'PLUSFSIZE',
    //         payload: fSizeState + 2
    //     };
    //     dispatch(action)
    // }
    // const handleDecFSize = ()=> {
    //     const action = {
    //         type: 'DECFSIZE',
    //         payload: fSizeState - 2
    //     };
    //     dispatch(action)
    // }
  return (
    <div className='container'>
        <h3>APP LIKE</h3>
        <h1>{number} <i className='fa fa-heart fs-1 text-danger'></i></h1>
        <button className='btn btn-danger mt-2'><i className='fa fa-heart' onClick={()=>{
            handleLike()
        }}></i></button>
        <hr />
        <h3>APP ZOOM</h3>
        <p style={{fontSize: fSizeState}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rerum voluptatibus laudantium provident ducimus error dolores totam. Commodi, eveniet minus.</p>
        <button className='btn btn-primary m-2' onClick={()=>{
            // handlePlusFSize();
            //B1 tạo ra action object có type và payload 
            const action = {
                type: 'CHANGE_FONT_SIZE',
                payload: 2
            }
            //B2 gửi action lên redux xử lý
            dispatch(action)
        }}>+</button>
        <button className='btn btn-primary m-2' onClick={()=>{
            // handleDecFSize();
            //B1 tạo ra action object có type và payload 
            const action = {
                type: 'CHANGE_FONT_SIZE',
                payload: -2
            }
            //B2 gửi action lên redux xử lý
            dispatch(action)
        }}>-</button>
    </div>
  )
}

export default NumberState