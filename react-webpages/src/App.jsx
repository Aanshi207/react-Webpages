import { Outlet } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { useState } from "react"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      
      {/* Sidebar */}
      <Sidebar
        sidebar={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
