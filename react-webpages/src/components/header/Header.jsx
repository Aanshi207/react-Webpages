import { Bell, ChevronDown, Menu, Search } from 'lucide-react'

function Header({ activeTab, setSidebarOpen,sidebar }) {
  return (
    <div className='bg-white/10 backdrop-blur-2xl border-b border-white/20 px-8 py-5 rounded-b-xl '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <button className={`lg:hidden text-white/70 hover:text-white p-2 rounded-xl
          hover:bg-white/10 
          `}
          onClick={() => setSidebarOpen(true)}
          
          >
            <Menu className='w-6 h-6' />
          </button>
          <div>
            <h2 className='text-3xl font-bold bg-linear-to-r from-white to-white/70
            bg-clip-text text-transparent capitalize'>
              {activeTab}
            </h2>
          </div>
        </div>
      
        <div className='flex items-center space-x-4'>
          <div className='hidden md:flex items-center bg-white/10 backdrop-blur-xl
          border border-white/20 rounded-2xl px-6 py-3 w-80 group hover:bg-white/20
          transition-all duration-300'>
            <Search className=' text-white/50 mr-3 group-hover:text-white/90 transition-all'/>
            <input 
              type='text'
              className='bg-transparent text-white placeholder-white/50 focus:outline-none flex-1'
              placeholder='Search Anything.....'
            />
          </div>
          
          <div className='flex items-center space-x-2'>
            <button className='relative p-3 text-white/70 hover:text-white hover:bg-white/10
            rounded-2xl transition-all hover:cursor-pointer duration-300 group'>
              <Bell className='h-6 w-6' />
              <span className='absolute -top-1 -right-1 h-5 w-5 bg-linear-to-r from-pink-500 to-red-500 rounded-full
              text-xs text-white flex items-center justify-center'>3</span>
            </button>

            <div className='flex items-center space-x-3 ml-4 bg-white/10 backdrop-blur-xl rounded-2xl
            px-4 py-2 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group'>
              <div className='hidden md:block text-right'>
                <p className='text-white font-semibold' >Aanshi Patel</p>
                <p>System Administrator</p>
              </div>
              {/* <div className='relative'>
                <div className='h-9 w-9 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl
                flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300'>
                  <span className='text-white font-bold'>AM</span>
                </div>
                <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full 
                border-2 border-white animate-pulse'></div>
                <ChevronDown className='h-4 w-4 text-white/60 group-hover:text-white transition-all' />
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>

  
  )
}

export default Header