import React from 'react'

const ProdItem = (props) => {
    const {item, setProductDetail} = props;
  return (
    <div className='card'>
        <img src={item.img} alt="..." />
        <div className='card-body'>
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()}</p>
            <button className='btn btn-success' data-toggle="modal"
        data-target="#modelId" onClick={() => {
            setProductDetail(item)
        }}>View Detail</button>
        </div>
    </div>
  )
}

export default ProdItem