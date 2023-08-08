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
    case "GET_SORT_VALUE":
        return{
            ...state,
            sorting_value:action.payload
        }
    case "SORTING_PRODUCTS":
        let newSortData;
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];
        const sortingProducts = (a, b) => {
        if (sorting_value === "bestSelling") {
            return b.stars-a.stars;
            }
    
        if (sorting_value === "AtoZ") {
        return a.name.localeCompare(b.name)
        }

        if (sorting_value === "ZtoA") {
        return b.name.localeCompare(a.name)
        }

        if (sorting_value === "lowestPrice") {
        return a.dealPrice-b.dealPrice
        }
        if (sorting_value === "highestPrice") {
        return b.dealPrice-a.dealPrice
        }
        }
        newSortData = tempSortProduct.sort(sortingProducts);
        return{
            ...state,
            filter_products:newSortData,
        }

  
    default: state;
  }
}
export default filterReducer