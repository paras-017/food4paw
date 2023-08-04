import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext.jsx'
import { PriceProvider } from './components/SingleProduct/PriceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <PriceProvider>
        <App />
      </PriceProvider>
    </React.StrictMode>,
  </AppProvider>
)
