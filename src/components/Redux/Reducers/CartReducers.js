import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions";

const initialState = {
    cart: [],
    products: [
        {name: "mobile", id: 1},
        {name: "samsung", id: 2},
        {name: "galaxy", id: 3},
        {name: "symphony", id: 4},
        {name: "laptop", id: 5},
    ]
}
    
    const cartReducers= (state = initialState,  action) => {
            switch(action.type) {
                case ADD_TO_CART: 
                console.log(action)
                  const newItem = {
                      productId: action.id,
                      name: action.name,
                      cartId : state.cart.length + 1
                  }
                    const newCart = [...state.cart, newItem];
                    return {...state, cart: newCart}

                case REMOVE_FROM_CART: 
                console.log(action)                              
                    const cartId = action.cartId
                    const remainingCard= state.cart.filter(item => item.cartId !== cartId)   
                    return {...state, cart: remainingCard} 

                default:
                    return state;
            }
    }
export default cartReducers;