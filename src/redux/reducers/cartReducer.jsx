import _ from 'lodash'

const stateCartDefault = [
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 ,quantity:5},
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000,quantity:2 },
]

export const cartReducer = (state= stateCartDefault, action)=>{
    switch(action.type){
        case 'ADD_ITEM':{
            const newProd = {
                ...action.payload, quantity:1
            }
            state = _.cloneDeep(state);
            // Tiến hành xử lý thay đổi state 
            const itemCart = state.find(item=> item.id === newProd.id);
            if(itemCart) {
                itemCart.quantity += 1;
            }else{
                state.push(newProd)
            };
        };
        break;
        case 'DEL_ITEM':{
            //1: lấy payload
            const id=action.payload;
            //B2: clone state cũ ra
            state = _.cloneDeep(state);
            //B3: xử lý thay đổi state
            let index = state.findIndex(prod => prod.id === id);
            if (index != -1) {
                state.splice(index,1);
            }
        };break;
        case 'CHANGE_QUANTITY':{
            //1: lấy payload
            const {id, quantity}=action.payload;
            //B2: clone state cũ ra
            state = _.cloneDeep(state);
            //B3: xử lý thay đổi state
            const itemCart = state.find(prod => prod.id === id);
            if(itemCart){
                itemCart.quantity += quantity;
            }
        };break;
        case 'CHANGE_INPUT_QUANTITY' : {
            //B1: Lấy ra payload
            const {id,quantity} = action.payload;
            //B2: clone state
            state = _.cloneDeep(state);
            //B3: Thay đổi state
            const itemCart = state.find(prod => prod.id === id);
            if(itemCart) {
                itemCart.quantity = quantity;
            }
        };break;
        
    }
    return state;
}