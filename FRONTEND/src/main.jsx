import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productContext.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_DOMAIN
const clientId = import.meta.env.VITE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{redirect_uri: window.location.origin}}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
)
