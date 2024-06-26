//rafce
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'
import { TOKEN_AUTHOR, setCookie, setDataTextStorage } from '../util/utilFunction';
import useRedux from '../CustomHook/useRedux';
import { loginAction, loginActionApi } from '../redux/reducers/userReducer';
import { setSubmitModalFunctionAction } from '../redux/reducers/modalReducer';

const Login = () => {
    const {dispatch} = useRedux();
    // hook của react router dom giúp chuyển hướng trang sau một xử lý
    const userLoginForm = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: async (values)=>{
            // console.log(values)
            // // Gọi api để đăng nhập
            // const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signin', values);
            // // console.log(res.data);
            // //Lưu vào localstorage
            // setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
            // setCookie(TOKEN_AUTHOR, res.data.content.accessToken);
            // // Lấy được dữ liệu tuwd api đưa lên redux
            // const action = loginAction(res.data.content);
            const actionThunk = loginActionApi(values.email, values.password);
            dispatch(actionThunk);
        }
    });

    useEffect(()=> {
        //mounting component
        const payload = userLoginForm.handleSubmit;
        const action = setSubmitModalFunctionAction(payload);
        dispatch(action);
    }, []);
  return (
    <div className='container'>
        <form className='w-50 mx-auto' onSubmit={userLoginForm.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <label>Email</label>
            <input className='form-control' name='email' id='email' onInput={userLoginForm.handleChange}></input>
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input className='form-control' name='password' id='password' onInput={userLoginForm.handleChange}></input>
        </div>
        <div className='form-group mt-2'>
           <button type='submit' className='btn btn-success'>Login</button>
        </div>
        </form>
    </div>
    
  )
}

export default Login