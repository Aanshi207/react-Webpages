import { Bell, Menu, Search } from "lucide-react"
import { useLocation } from "react-router-dom"

function Header({ setSidebarOpen }) {
  const location = useLocation()

  const pageTitle =
    location.pathname === "/"
      ? "Overview"
      : location.pathname.replace("/", "").replace("-", " ")

  return (
    <header
      className="bg-white/10 backdrop-blur-2xl border-b border-white/20
      px-4 sm:px-6 lg:px-8 py-5 "
    >
      <div className="flex items-center justify-between gap-4">
        
        
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            className="lg:hidden text-white/70 hover:text-white p-2
            rounded-xl hover:bg-white/10"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold
            bg-linear-to-r from-white to-white/70
            bg-clip-text text-transparent capitalize"
          >
            {pageTitle}
          </h2>
        </div>

        
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* SEARCH (hidden on small) */}
          <div
            className=" flex md:flex items-center bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-2xl px-4 lg:px-6 py-2 lg:py-3
            w-40 h-auto lg:w-80 hover:bg-white/20 transition-all"
          >
            <Search className="text-white/50 mr-3 " />
            <input
              type="text"
              className="bg-transparent  text-white placeholder-white/50
              focus:outline-none flex-1 text-sm"
              placeholder="Search..."
            />
          </div>

          
          <button
            className="relative p-2 sm:p-3 text-white/70 hover:text-white
            hover:bg-white/10 rounded-xl transition-all"
          >
            <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
            <span
              className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5
              bg-linear-to-r from-pink-500 to-red-500 rounded-full
              text-[10px] sm:text-xs text-white
              flex items-center justify-center"
            >
              3
            </span>
          </button>

          
          <div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-xl
            rounded-xl px-3 sm:px-4 py-2 border border-white/20
            hover:bg-white/20 transition cursor-pointer"
          >
            
            <div
              className="lg:hidden h-8 w-8 bg-linear-to-r from-cyan-400 to-blue-500
              rounded-xl flex items-center justify-center text-white font-bold"
            >
              AP
            </div>

            
            <div className=" hidden sm:block text-right">
              <p className="text-white font-semibold text-sm">
                Aanshi Patel
              </p>
              <p className="text-white/60 text-xs">
                System Admin
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
