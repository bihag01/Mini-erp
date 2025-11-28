
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'

import Login from './pages/Login'
import Products from './pages/Products'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/" element={<AppLayout />}>
        <Route path="products" element={<Products />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
