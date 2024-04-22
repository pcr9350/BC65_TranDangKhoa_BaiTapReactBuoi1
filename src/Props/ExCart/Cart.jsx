import React from 'react'

const Cart = (props) => {
    const {arrProductCart, delItem, changeQuanlity} = props;
    
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quanlity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arrProductCart.map((itemCart, index) => {
                    return <tr key={index}>
                    <td>{itemCart.id}</td>
                    <td>{itemCart.name}</td>
                    <td><img src={itemCart.img} alt='...' width={50}/></td>
                    <td>{itemCart.price}</td>
                    <td>
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            changeQuanlity(itemCart.id, 1)
                        }}>+</button>
                        {itemCart.quanlity}
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            changeQuanlity(itemCart.id, -1)
                        }}>-</button>
                    </td>
                    <td>{itemCart.price * itemCart.quanlity}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{
                            delItem(itemCart.id)
                        }}><i className='fa fa-trash'></i></button>
                    </td>
                </tr>
                })}
                
            </tbody>
        </table>
       
    </div>
  )
}

export default Cart