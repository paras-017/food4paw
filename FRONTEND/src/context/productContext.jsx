import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext()

const API =  `https://food4pawsapi-production.up.railway.app/api/products`

//-------------PROVIDING CONTEXT--------------------
const AppProvider = ({children}) => {
    const getProducts = async(url) => {
     try {
        const res = await axios.get(url)
        const products = await res.data
        console.log(products)
     } catch (error) {
        console.log(`Product Context API ${error}`)
     }
    }
    useEffect(() => {
       getProducts(API)       
     }, [])

    return (
        <AppContext.Provider value={{myName:"paras"}}>
         {children}
        </AppContext.Provider>
 )
}

//-------------CUSTOM HOOK--------------------
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}