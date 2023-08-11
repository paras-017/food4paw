const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        let {selectedWeight,quantity,priceInfo,product,Pid} = action.payload
        let cartProduct;
        cartProduct={
            id:Pid+selectedWeight,
            name: product.name,
            selectedWeight,
            quantity,
            image:priceInfo.ImgbySize,
            max:product.stock,
            priceInfo:priceInfo.dealPrice
        }
     return{
        ...state,
        cart:[...state.cart,cartProduct],

     }
  
    default:
        break;
  }
  return state;
}

export default cartReducer