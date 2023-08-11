const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        let {selectedWeight,quantity,priceInfo,product} = action.payload
        console.log(product)
  
    default:
        break;
  }
  return state;
}

export default cartReducer