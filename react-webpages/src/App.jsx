import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { act, useEffect, useState } from 'react'

function App() {
  
  const [sidebar, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div className='flex min-h-screen bg-linear-to-br from-indigo-900 via-purple-900
      to-pink-900 relative overflow-hidden'>
        {/* SIDEBAR */}
        <div className='flex  min-h-screen relative z-10'>
          <Sidebar
           sidebar={sidebar}
           setSidebarOpen = {setSidebarOpen}
           activeTab={activeTab}
           setActiveTab={setActiveTab} />
        </div>

      {/* HEADER */}
        <div className='w-full'>
          <div className='w-full overflow-hidden'>
            <Header
              sidebar={sidebar}
              activeTab={activeTab}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
        
        {/* FOOTER */}
          <div className='w-full mt-10 overflow-hidden'>
            <Footer 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>

      </div>

      
    </>
  )
}

export default App
