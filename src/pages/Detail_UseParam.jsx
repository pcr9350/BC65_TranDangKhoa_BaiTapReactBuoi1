import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { httpStore } from '../util/config';

const Detail_UseParam = (props) => {
    const [productDetail, setProductDetail] = useState({});
    // useParam => lấy param trên url
    const params = useParams();
    // console.log(params);
    const getProductDetail = async ()=>{
        const res = await httpStore.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.idProduct}`)
        setProductDetail(res.data.content);
        // console.log(res.data.content)
    }
    useEffect(()=>{
        getProductDetail();
    },[params.idProduct]);
  return (
    <div className='container'>
        <h3>Details</h3>
        <p>Params id: {params.idProduct} - {productDetail.name}</p>
        <div className='row'>
            <div className='col-2'>
                <img src={productDetail.image} alt={productDetail.alias} className='w-100' />
            </div>
            <div className='col-10'>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                {/* optional chaining: ? nếu như ref có giá trị thì render còn không có giá trị thì bỏ qua */}
                {productDetail.size?.map((size)=>{
                    return <button key={size} className='btn btn-dark mr-2 mt-2'>{size}</button>
                })}
                <br />
                <button className='btn btn-primary mt-2'>Add to cart <i className='fa fa-cart-plus'></i></button>
            </div>
        </div>
                <h3>Related Products</h3>
        <div className='row mt-2'>
            {productDetail.relatedProducts?.map((prod, index)=>{
                return <div className='col-4' key={index}>
                    <div className='card'>
                        <img src={prod.image} alt={prod.alias} className='w-100' />
                        <div className='card-body'>
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <NavLink className='btn btn-dark' to={`/detail/${prod.id}`}>View Detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Detail_UseParam