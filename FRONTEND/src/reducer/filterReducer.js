const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
        return{
            ...state,
            //We are using the copy of filter_products,all_products
            filter_products:[...action.payload],
            all_products:[...action.payload]
        }
    case "SET_GRID_VIEW":
        return{
            ...state,
            grid_view:true
        }
    case "SET_LIST_VIEW":
        return{
            ...state,
            grid_view:false
        }
        

  
    default: state;
  }
}
export default filterReducer