import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'
const CartContext = createContext()


const initialState = {
    cart:[],
    // cart:getLocalCartData(),
    total_item:"",
    total_originalPrice:"",
    total_price:"",
    total_quantity:""
}

const getLocalCartData =()=>{
    let localCartData = localStorage.getItem('cart');
    if (localCartData === 'undefined') {
        return [];
    } else {
        const parsedData = JSON.parse(localCartData);
        return parsedData;
    }
}

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState) 
    // Adding data to cart array
    const addToCart=(selectedWeight,quantity,priceInfo,product,Pid)=>{
     dispatch({type:"ADD_TO_CART", payload:{selectedWeight,quantity,priceInfo,product,Pid}})
    }
    //Removing item from cart Array
    const removeItem = (id)=>{
     dispatch({type:"REMOVE_ITEM", payload:id})
    }
    // Increment and decrement of product quantity
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
      };
    
    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
      }

    // Saving data to localStorage
    useEffect(() => {
        const localCart = getLocalCartData();
        dispatch({ type: 'INITIALIZE_CART', payload: localCart });
    }, [])
    

    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEM_PRICE"})
        localStorage.setItem("cart",JSON.stringify(state.cart))
    }, [state.cart])
    

    return (
    <CartContext.Provider value={{...state, addToCart,removeItem,setDecrease, setIncrement}}>
        {children}
    </CartContext.Provider>
    )
}

// GLOBAL CONTEXT
const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider,useCartContext}