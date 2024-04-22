import React, {useState} from 'react'
import Cart from './Cart'
import ProductListItem from './ProductListItem'

const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];
const ExCart = () => {
    let [arrProductCart, setArrProductCart] = useState([
        {id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000, quanlity: 5},
        {id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000, quanlity: 2},
    ])
    // Định nghĩa logic thay đổi state tại component chứa State
    const addToCart = (prodClick) => {
        // Thêm 1 thuộc tính vào prodClick tạo ra product trong giỏ hàng có thêm số lượng
        let prodCart = {...prodClick, quanlity:1}
        //kiểm tra sản phẩm đã có trên giỏ hàng hay chưa
        let prod = arrProductCart.find(p => p.id === prodClick.id);
        if (prod) //Nếu object có chứa id có trong giỏ hàng 
        {
            prod.quanlity += 1 // Tăng số lượng
        }
        else {
            arrProductCart.push(prodCart); // chưa có thì thêm vào
        }
        // Clone object reference value (để hàm setState hiểu là State mới)
        arrProductCart = [...arrProductCart]
        // Cập nhựt lại giỏ hàng
        setArrProductCart(arrProductCart)
    }

    const delItem = (idClick) => {
        let index = arrProductCart.findIndex(p => p.id === idClick);
        if (index != -1) {
            arrProductCart.splice(index, 1);
        }
        // Cập nhựt lại giỏ hàng
        setArrProductCart([...arrProductCart])
    }
    const changeQuanlity = (idClick, num) => {
            //Dựa vào id tìm ra sản phẩm
            let prodCart = arrProductCart.find(p => p.id === idClick);
            if(prodCart) {
                prodCart.quanlity += num;
            }
            //Cập nhựt lại giỏ hàng = hàm setState
            setArrProductCart([...arrProductCart])
        }
  return (
    <div className='container'>
        <h3>Shopping Cart</h3>
        <Cart arrProductCart={arrProductCart} delItem={delItem} changeQuanlity={changeQuanlity}/>
        <h3>Product list</h3>
        <ProductListItem products={products} addToCart = {addToCart}/>
    </div>
  )
}

export default ExCart