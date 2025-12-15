import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  

  return (
    <>
      <Header />
      <Sidebar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
