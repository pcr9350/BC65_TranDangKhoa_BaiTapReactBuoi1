import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
const DemoUseSearchParam = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([])
    const frm = useFormik({
        initialValues:{
            keyword:'',
        },
        onSubmit: (values)=>{
            // console.log(values);
            // setSearchParam đưa dữ liệu người dùng nhập lên url
            setSearchParam({
            k: values.keyword
            })

        }
    });

    const getProductByKeyword = async ()=>{
        const k = searchParam.get("k");
        const res = await axios.get(
          `https://shop.cyberlearn.vn/api/product?keyword=${k}`
        );
        // console.log(res.data.content);
        setArrProduct(res.data.content)
    }

    useEffect(()=>{
    // console.log(searchParam.get('k'));
    //Lấy tham số để call api
        getProductByKeyword();
    }, [searchParam.get('k')])
  return (
    <div className='container'>
        <h3>Tìm kiếm sản phẩm</h3>
        <form action="" onSubmit={frm.handleSubmit}>
            <input type="text" name='keyword' className='w-25 d-inline form-control' onInput={frm.handleChange}/>
            <button className='btn btn-success ml-2'>Search</button>
        </form>
        <h3>Kết quả tìm kiếm</h3>
        <div className='result row'>
            {arrProduct.map((prod, index)=>{
                return <div className="col-4" key={index}>
                <div className="card">
                    <img src={prod.image} alt="..." />
                    <div className="card-body">
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <NavLink to={`/detail/${prod.id}`} className={'btn btn-success'}>View detail</NavLink>
                    </div>
                </div>
            </div>
            })}
            
        </div>
    </div>
  )
}

export default DemoUseSearchParam