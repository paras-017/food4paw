import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </FilterContextProvider>
  </AppProvider>
)
