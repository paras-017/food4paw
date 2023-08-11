import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'
const CartContext = createContext()

const getLocalCartData =()=>{
    let localCartData = localStorage.getItem('cart')
    console.log(localCartData)
    if(localCartData === []){
        return []
    }else{
        return JSON.parse(localCartData)
    }


}
const initialState = {
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_quantity:"",
    shipping_fee:125,
}

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState) 
    // Adding data to cart array
    const addToCart=(selectedWeight,quantity,priceInfo,product,Pid)=>{
     dispatch({type:"ADD_TO_CART", payload:{selectedWeight,quantity,priceInfo,product,Pid}})
    }
    //Removing item from cart Array
    const removeItem = (id)=>{
        console.log(id)
     dispatch({type:"REMOVE_ITEM", payload:id})
    }
    // Saving data to localStorage
    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(state.cart))
    }, [state.cart])
    

    return (
    <CartContext.Provider value={{...state, addToCart,removeItem}}>
        {children}
    </CartContext.Provider>
    )
}

// GLOBAL CONTEXT
const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider,useCartContext}