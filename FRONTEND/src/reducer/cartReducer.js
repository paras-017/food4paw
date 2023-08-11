const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        let {cart} = state 
        let {selectedWeight,quantity,priceInfo,product,Pid} = action.payload
        let existingProduct = cart.find((curItem)=>curItem.id === Pid+selectedWeight)
        if(existingProduct){
         let updatedProduct = cart.map((curItem)=>{
          if(curItem.id==Pid+selectedWeight){
            let newQuantity = curItem.quantity+quantity
            return{
              ...curItem,
              quantity:newQuantity
            }
          }else{
            return curItem
          }
         })
         return {
          ...state,
          cart:updatedProduct,
  
       }
        }else{
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
              cart:[...cart,cartProduct],
            }
          }        

    case "REMOVE_ITEM":
      console.log('removing item')
      // let {cart} = state
      let id = action.payload
      let updatedCart = state.cart.filter((curItem)=>curItem.id !== id)
      console.log(updatedCart)
      return{
        ...state,
        cart: updatedCart
      }
    
    case 'SET_DECREMENT':
        let updatedProductData = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
              let decAmount = curElem.quantity - 1;
      
              if (decAmount <= 1) {
                decAmount = 1;
              }
      
              return {
                ...curElem,
                quantity: decAmount,
              };
            } else {
              return curElem;
            }
          });
          return { ...state, cart: updatedProductData };

    case 'SET_INCREMENT':
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
              let incAmount = curElem.quantity + 1;
      
              if (incAmount >= curElem.max) {
                incAmount = curElem.max;
              }
      
              return {
                ...curElem,
                quantity: incAmount,
              };
            } else {
              return curElem;
            }
          });
          return { ...state, cart: updatedProduct };
       
    case "CART_TOTAL_ITEM_PRICE":
      let {total_item, total_price} = state.cart.reduce((initialVal, curElem)=>{
         let {priceInfo,quantity} = curElem
         initialVal.total_item += quantity
         initialVal.total_price += priceInfo*quantity
         
         return initialVal
      },{total_item:0,total_price:0})

      return{
        ...state,
        total_item, 
        total_price
      }


    default:
        break;
  }
  return state;
}

export default cartReducer