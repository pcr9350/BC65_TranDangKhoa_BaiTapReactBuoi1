//rafce
import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    // hook của react router dom giúp chuyển hướng trang sau một xử lý
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const userLogin = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value,
        }
        if (userLogin.email == 'cybersoft@gmail.com' && userLogin.password === '123456') {
            // Chuyển hướng về page profile
            navigate('/user/profile')

        }else{
            //chuyển hướng về page forgot pass
            navigate('/forgot')
        }
    }
  return (
    <div className='container'>
        <form className='w-50 mx-auto' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <label>Email</label>
            <input className='form-control' name='email' id='email'></input>
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input className='form-control' name='password' id='password'></input>
        </div>
        <div className='form-group mt-2'>
           <button type='submit' className='btn btn-success'>Login</button>
        </div>
        </form>
    </div>
    
  )
}

export default Login