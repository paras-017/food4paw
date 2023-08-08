import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import Products from "../pages/products/Products";

const AppContext = createContext()

const API =  `https://food4pawsapi-production.up.railway.app/api/products?sort=-stars`
const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    isSingleLoading:false,
    singleError:false,
    singleProduct:{},
    
}


//-------------PROVIDING CONTEXT--------------------
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {
     dispatch({type:"SET_LOADING"})
     try {
        const res = await axios.get(url)
        const products = await res.data
        dispatch({type:"SET_API_DATA", payload:products['Products']})
     } catch (error) {
        console.log(`Product Context API ${error}`)
        dispatch({type:"API_ERROR"})
     }
    }

//----getSingleProduct---------
    const getSingleProduct = async(url) => {
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
       const res = await axios.get(url)
       const singleProduct = await res.data
       dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct.Products[0]})
    } catch (error) {
       console.log(`singleProduct Context API ${error}`)
       dispatch({type:"SET_SINGLE_ERROR"})
    }
   }

    useEffect(() => {
       getProducts(API)       
     }, [])


    return (
        <AppContext.Provider value={{...state, getSingleProduct}}>
         {children}
        </AppContext.Provider>
 )
}

//-------------CUSTOM HOOK--------------------
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}