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
    autoSuggest:['me-o','whiskas', 'drool', 'kitten', 'dog','cat','Pedigree Adult Dry Dog','Cat Food','dog food','Taiyo','Fish Food'],
    
    filters:{
        text:'',
        suggestions:[],
        selectedCategories:[],
        maxPrice: 0,
        price: 0,
        minPrice: 0,
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
        dispatch({type:"GET_SORT_VALUE", payload:userValue})
    }
    const getUniqueData=(data, property)=>{
        let newValue = data.map((curElem)=>{
          return curElem[property]
        })
        if(property === 'petCategory'){
          return (newValue = ["ALL",...new Set([].concat(...newValue))])
        }else{
          return newValue = ["ALL", ...new Set(newValue)]
        }
       
      }
    const updateFilterValue = (e)=>{
        let name = e.target.name
        let value = e.target.value
        return dispatch({type:'UPDATE_FILTER_VALUE', payload:{name, value}})
    }
    const handleCategoryChange = (curElem) => {
        const selectedCategories = [...state.filters.selectedCategories];
      
        if (selectedCategories.includes(curElem)) {
          // If the category is already selected, remove it
          const updatedCategories = selectedCategories.filter(
            (category) => category !== curElem
          );
          dispatch({ type: 'UPDATE_SELECTED_CATEGORIES', payload: updatedCategories });
        } else {
          // If the category is not selected, add it
          selectedCategories.push(curElem);
          dispatch({ type: 'UPDATE_SELECTED_CATEGORIES', payload: selectedCategories });
        }
      };
    const ClearFilter = ()=>{
      dispatch({type:"CLEAR_FILTERS"})
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
        <FilterContext.Provider value={{...state,
                                        setGridView, 
                                        setListView, 
                                        sorting, 
                                        updateFilterValue,
                                        getUniqueData,
                                        handleCategoryChange,
                                        ClearFilter
                                        }}>
           {children}
        </FilterContext.Provider>
    )

}

//----------Using Context----------
export const useFilterContext =()=>{
    return useContext(FilterContext)
}