import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext()

const API =  `https://food4pawsapi-production.up.railway.app/api/products`
const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    
}


//-------------PROVIDING CONTEXT--------------------
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {
     dispatch({type:"SET_LOADING"})
     try {
        const res = await axios.get(url)
        const products = await res.data
        dispatch({type:"SET_API_DATA", payload:products})
     } catch (error) {
        console.log(`Product Context API ${error}`)
        dispatch({type:"API_ERROR"})
     }
    }

//----getSingleProduct  64ca4d186e5e67d0326ecc93
        

    useEffect(() => {
       getProducts(API)       
     }, [])


    return (
        <AppContext.Provider value={{...state}}>
         {children}
        </AppContext.Provider>
 )
}

//-------------CUSTOM HOOK--------------------
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}