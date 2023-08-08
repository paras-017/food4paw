import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer'

//----------Creating Context----------
const FilterContext = createContext()
const initialState = {
    filter_products : [],
    all_products:[],
    grid_view:true,
    sorting_value:'bestSelling',
    filters:{
        text:'',
    }
}


//----------Providing Context----------
export const FilterContextProvider =({children})=>{
    const {products} = useProductContext()
    const [state, dispatch]=useReducer(reducer, initialState)
    const setGridView = () =>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () =>{
        return dispatch({type:"SET_LIST_VIEW"})
    }
    const sorting = (e) => {
        let userValue = e.target.value;
        console.log('userValue', userValue)
        dispatch({type:"GET_SORT_VALUE", payload:userValue})
    }
    const updateFilterValue = (e)=>{
        let name = e.target.name
        let value = e.target.value
      return dispatch({type:'UPDATE_FILTER_VALUE', payload:{name, value}})
    }

    useEffect(() => {
       dispatch({type:'FILTER_PRODUCTS'})
       dispatch({type:"SORTING_PRODUCTS", payload:products})
    }, [products,state.sorting_value,state.filters])
    
    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
        //usign products as dependency array ifnot it will just just send empty product array
    }, [products])
        

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>
           {children}
        </FilterContext.Provider>
    )

}

//----------Using Context----------
export const useFilterContext =()=>{
    return useContext(FilterContext)
}