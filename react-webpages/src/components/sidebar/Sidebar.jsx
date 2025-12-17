import { Rocket, Sparkles, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { menuItems } from "../../data/Data"

function Sidebar({ sidebar, setSidebarOpen }) {
  return (
    <>
      
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden
        ${sidebar ? "block" : "hidden"}`}
        onClick={() => setSidebarOpen(false)}
      />

      
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 sm:w-80
        bg-white/10 backdrop-blur-xl border-r border-white/20
        transform transition-transform duration-300
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        
        <div className="flex items-center justify-between h-24 px-6 border-b border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl
              flex items-center justify-center shadow-2xl">
              <Sparkles className="h-7 w-7 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">ReactPages</h1>
              <p className="text-xs text-white/60">PREMIUM SUITE</p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/70 hover:text-white"
          >
            <X />
          </button>
        </div>

        
        <nav className="mt-15 px-4 space-y-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-2xl relative overflow-hidden
                transition-all duration-300
                ${
                  isActive
                    ? "bg-white/20 text-white shadow-lg scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div
                      className={`absolute inset-0 bg-linear-to-r opacity-30 ${item.gradient}`}
                    />
                  )}

                  <div
                    className={`p-2 rounded-xl bg-linear-to-r mr-4 relative z-10 ${item.gradient}`}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>

                  <span className="font-semibold relative z-10">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
