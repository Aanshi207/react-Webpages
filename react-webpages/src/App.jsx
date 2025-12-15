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
        <div className='flex  min-h-screen relative z-10'>
          <Sidebar
           sidebar={sidebar}
           setSidebarOpen = {setSidebarOpen}
           activeTab={activeTab}
           setActiveTab={setActiveTab} />
        </div>

        <div className='w-full  flex flex-col overflow-hidden'>
          <Header
            sidebar={sidebar}
            activeTab={activeTab}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

      </div>
    </>
  )
}

export default App
