import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Overview from './components/overview/Overview.jsx'
import Analytics from './components/analytics/Analytics.jsx'
import Customers from './components/customers/Customers.jsx'
import Sales from './components/sales/Sales.jsx'
import Setting from './components/setting/Setting.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='overview' element={<Overview />} />
      <Route path='analytics' element={<Analytics />} />
      <Route path='customers' element={<Customers />} />
      <Route path='sales' element={<Sales />} />
      <Route path='setting' element={<Setting />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
