import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cartReducer'
const CartContext = createContext()

const initialState = {
    cart:[],
    total_item:"",
    total_quantity:"",
    shipping_fee:125,
}

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState) 

    const addToCart=(selectedWeight,quantity,priceInfo,product)=>{
     dispatch({type:"ADD_TO_CART", payload:{selectedWeight,quantity,priceInfo,product}})
    }

    return (
    <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
    )
}

// GLOBAL CONTEXT
const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider,useCartContext}