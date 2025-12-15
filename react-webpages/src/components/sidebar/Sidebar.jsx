import { Crown, Rocket, Sparkle, X } from 'lucide-react'
import React from 'react'
import { menuItems } from '../../data/Data'

function Sidebar({ sidebar, setSidebarOpen, activeTab, setActiveTab }) {
  return (
    <>
        <div className={`${sidebar ? "translate-x-0" : "-translate-x-full"} fixed backdrop-blur-md inset-y-0 left-0 z-50 w-80 bg-white/10 
            border-r border-white/20  duration-500 ease-out lg:translate-x-0 
            lg:static lg:inset-0 `}>
                <div className='flex items-center justify-between h-24 px-8 border-b border-white/20'>
                    <div className='flex  items-center space-x-4'>
                        <div className='relative'>
                            <div className=' w-12 h-12 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl
                            flex items-center justify-center shadow-2xl'>
                               <Sparkle className='h-7 w-7 text-white hover:cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold bg-linear-to-r from-white to-white/80
                            bg-clip-text text-transparent'>
                                ReactPages
                            </h1>
                            <p className='text-xs text-white/60 font-medium'>PREMIUM SUITE</p>
                        </div>
                    </div>
                    <button className='lg:hidden text-white/70 hover:text-white p-2 rounded-xl
                    hover:bg-white/10 transition-colors'
                    onClick={()=> setSidebarOpen(false)}>
                        <X className='h-6 w-6' />
                    </button>
                </div>
                <nav className='mt-8 px-6 space-y-2'>
                    {/* I will use map method*/}                   
                    {menuItems.map((items) => {
                        return(
                            <button 
                            key={items.id}
                            className={`w-full flex flex-wrap items-center px-6 py-4 text-left rounded-2xl
                                transition-all duration-300 group relative overflow-hidden hover:cursor-pointer
                                ${activeTab === items.id ? "bg-white/20 text-white shadow-2xl scale-105" : 
                                    "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                            }`}
                            onClick={() => {setActiveTab(items.id);
                                //setSidebarOpen(false);
                            }}
                            >
                                {/* Conditional Rendering*/}
                                {activeTab === items.id && (
                                <div 
                                    className={`absolute inset-0 bg-linear-to-r opacity-30 rounded-2xl
                                    ${items.gradient}`}>
                                </div>
                                )}
                                    
                                <div className={`p-2 rounded-xl bg-linear-to-r mr-4 group-hover:scale-110
                                    transition-all duration-300 relative z-10 ${items.gradient}`}>
                                        <items.icon className='h-5 w-5 text-white' />
                                </div>
                                <span className='font-semibold relative z-10'>{items.label}</span>
                            </button>
                        )
                    })}
                    
                </nav>
                
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <div className='relative overflow-hidden bg-linear-to-r from-purple-200/20
                    to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20'>
                        <div className='absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-white/10 
                        to-transparent rounded-full transform translate-x-10 -translate-y-10'></div>
                            <div className='relative'>
                                <div className='flex items-center space-x-3 mb-4'>
                                    <div className='p-2 bg-linear-to-r from-yellow-400 to-orange-500 rounded-xl'>
                                        <Crown className='h-6 w-6 text-white' />
                                    </div>
                                    <div>
                                        <h3 className='text-white font-bold'>Ultra pro</h3>
                                        <p className='text-white/60 text-xs'>Advanced Analytics</p>
                                    </div>
                                </div>
                                <button className='w-full bg-linear-to-r from-purple-600 to-pink-600
                                tetx-white py-3 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-300'>
                                    <Rocket className='w-4 h-4 inline mr-2' />
                                    Upgarde Now
                                </button>
                                
                            </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Sidebar