import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { StateDataProvider } from './context/StateDataContext'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <StateDataProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </StateDataProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
