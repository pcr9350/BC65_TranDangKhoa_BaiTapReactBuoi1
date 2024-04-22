import React from 'react'

const ProductListItem = (props) => {
    const {products, addToCart} = props;
  return (
    <div>
        <div className='row'>
            {products.map((prod, index) => {
                return <div className='col-3 mt-2' key={index}>
                    <div className='card'> 
                        <img src={prod.img} alt='...' />
                        <div className='card-body'>
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <button className='btn btn-dark' onClick={()=>{
                                addToCart(prod)
                            }}>
                                Add to Cart <i className='fa fa-cart-plus'></i>
                            </button>
                        </div>

                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductListItem