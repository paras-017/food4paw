import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
)
