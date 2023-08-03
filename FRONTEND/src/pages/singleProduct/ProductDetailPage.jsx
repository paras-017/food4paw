import React from 'react'

const ProductDetailPage = () => {
  return (
    <div class="text-center m-20 border-2 rounded-md">
        <div class="h-[50rem] w-[50rem] overflow-hidden rounded-md">
            <img class="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <h3 class="text-3xl py-4">Our Mission</h3>
        <span class="text-lg text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum quos voluptatum tempore quis exercitationem, ad officiis dolorum temporibus veritatis quod itaque repellendus molestiae culpa laboriosam, cupiditate voluptate. Eius, placeat! </span>
    </div>
  )
}

export default ProductDetailPage