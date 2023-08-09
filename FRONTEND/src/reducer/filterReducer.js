const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curElem) => curElem.dealPrice);
        let maxPrice = Math.max(...priceArr);
       
        return{
            ...state,
            //We are using the copy of filter_products,all_products
            filter_products:[...action.payload],
            all_products:[...action.payload],
            filters: { ...state.filters, maxPrice, price: maxPrice },
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
    case "SET_GRID_VIEW":
       return{
          ...state,
          grid_view:true
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
    case "UPDATE_FILTER_VALUE":
      const {autoSuggest} = state
        const {name, value} = action.payload
        const {suggestions} = state.filters;
        const filteredSuggestions =value.trim() === '' ?[]:autoSuggest.filter(
          (suggestion) => suggestion.toLowerCase().includes(value.toLowerCase())
        );
        
        return{
            ...state,
            filters:{
                ...state.filters,
                [name]:value,
                suggestions:filteredSuggestions
            }
            
        }
    case "FILTER_PRODUCTS":
        let {all_products} = state
        let tempFilterProducts = [...all_products]
        const {text, selectedCategories,price } = state.filters;
        if(text){
            tempFilterProducts = tempFilterProducts.filter((curElem)=>{
              return curElem.name.toLowerCase().includes(text)
            })
        }
        if (selectedCategories.length > 0 && !selectedCategories.includes('ALL')) {
          tempFilterProducts = tempFilterProducts.filter((curElem,i) => {
            
           
            return (
              selectedCategories.includes(curElem.brand) || 
              selectedCategories.includes(curElem.topCategory) ||
              selectedCategories.includes(curElem.petCategory[0])
            );
          });
        }
        if (price === 0) {
          tempFilterProducts = tempFilterProducts.filter(
            (curElem) => curElem.dealPrice == price
          );
        } else {
          tempFilterProducts = tempFilterProducts.filter(
            (curElem) => curElem.dealPrice <= price
          );
        }
        return {
          ...state,
          filter_products:tempFilterProducts
        }
    case "UPDATE_SELECTED_CATEGORIES":
      return {
          ...state,
          filters: {
            ...state.filters,
            selectedCategories: action.payload,
          },
        };
      
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters:{
          ...state.filters,
          text:'',
          selectedCategories:[],
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        }
      }

    
  
    default: state;
  }
}
export default filterReducer