//rafce
import React, { useState } from 'react'

const FormComponent = () => {
    const [useRegister, setUserRegister] = useState({
        email:'',
        password:'',
        gender:true,
        phone:'',
        fullName:''
    })
    const [errUseRegister, setErrUserRegister] = useState({
        email:'',
        password:'',
        phone:'',
        fullName:''
    })

    const handleChangeInput = async (e)=>{
        let {name,value} = e.target;
        // let newState = {...useRegister, [name]: value};
      
       await setUserRegister({
            ...useRegister,
            [name]:value});
             //setState render lại giao diện với giá trị State mới
            let errMess='';
            if (value === '') {
                errMess = `${name} cannot be blank`;

            }else {
                let dataType = e.target.getAttribute('data-type');
                if(dataType === 'email') {
                    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9.-]+)*$/;
                    if(!regexEmail.test(value)){
                        errMess = `${name} is invalid !`;
                    }
                }else if(dataType === 'phone') {
                    const regexPhoneVNEnhanced = /^(\+84|0)?([3|5|7|8|9]{1})?([0-9]{8})$/;
                if(!regexPhoneVNEnhanced.test(value)){
                    errMess = `${name} is invalid !`;
                }
                }else if(dataType === 'name') {
                    const regexTenTiengViet = /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,}$/u;
                    if(!regexTenTiengViet.test(value)) {
                        errMess = `${name} is invalid !`;
                    }
                }
            }
            setErrUserRegister({
                ...errUseRegister,
                [name]: errMess
            })
    }
  return (
    <div className='container'> 
        <form className='w-50 mx-auto'>
            <div className='form-group'>
                <label>Email</label>
                <input data-type='email' className='form-control' name='email' id='email' onInput={handleChangeInput}/>
                <p className='text text-danger'>{errUseRegister.email}</p>
            </div>
            <div className='form-group'>
                <label>FullName</label>
                <input data-type='name' className='form-control' name='fullName' id='fullName' onInput={handleChangeInput}/>
                <p className='text text-danger'>{errUseRegister.fullName}</p>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control' name='password' id='password' onInput={handleChangeInput}/>
                <p className='text text-danger'>{errUseRegister.password}</p>
            </div>
            <div className='form-group my-2'>
                    <label className='me-2'>gender</label>
                        <input type="radio"  className='form-check-input mx-2' name="gender" id="Male" value={'true'} checked={useRegister.gender === 'true'} onChange={handleChangeInput}/> 
                        <label htmlFor="Male" className='mx-2'>Male</label>
                        <input type="radio"  className='form-check-input mx-2' name="gender" id="Female" value={'false'} checked={useRegister.gender === 'false'} onChange={handleChangeInput}/> 
                        <label className='mx-2' htmlFor="Female">Female</label>
            </div>
            <div className='form-group'>
                <label>phone</label>
                <input data-type='phone' className='form-control' name='phone' id='phone' type='number' onInput={handleChangeInput}/>
                <p className='text text-danger'>{errUseRegister.phone}</p>
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default FormComponent