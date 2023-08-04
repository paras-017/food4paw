const productReducer = (state, action) => {
   switch (action.type) {
    case "SET_LOADING":
        return {
             ...state,
             isLoading:true,
        }
    case "API_ERROR":
        return {
             ...state,
             isLoading:false,
             isError:true

        }
    case "SET_API_DATA":
        return {
             ...state,
             isLoading:false,
             products:action.payload

        }
    case "SET_SINGLE_LOADING":
        return {
             ...state,
             isSingleLoading:true
        }
    case "SET_SINGLE_PRODUCT":
        return {
             ...state,
             isSingleLoading:false,
             singleProduct:action.payload,
        }
    case "SET_SINGLE_ERROR":
            return {
                 ...state,
                 isSingleLoading:false,
                 singleError:true
    
            }
   
    default: return state
   }
}
export default productReducer