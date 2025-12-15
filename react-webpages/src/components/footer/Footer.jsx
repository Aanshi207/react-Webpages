import {  ArrowBigUpIcon, ChevronsUp, Facebook, Instagram, Linkedin, Sparkle, TwitterIcon } from 'lucide-react'
import React from 'react'
import { menuItems,legalItems } from '../../data/Data'

function Footer({ activeTab, setActiveTab }) {
  return (
    <div className='flex space-x-130 bg-white/10 backdrop-blur-2xl border-t border-white/20 px-8 py-15 rounded-t-xl  '>
      <div className='items-center justify-between'>
        
        {/* LOGO IN FOOTER */}
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className=' w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl
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

        {/* CONTENT AND ACCOUNT */}
        <div className='w-60 mt-10 items-center '>
          <div>
            <p className='text-xs text-white/60 font-medium'>This is React footer for prectice with tailwindcss. React components for Lucide icons that integrate seamlessly into your React applications.   </p>
          </div>

          <div className='mt-10 flex space-x-3 '>
            <div className='  w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl
                flex items-center justify-center shadow-2xl'>
                <Instagram className='h-5 w-5 text-white hover:cursor-pointer' />
            </div>
            <div className='  w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl
                flex items-center justify-center shadow-2xl'>
                <Linkedin className='h-5 w-5 text-white hover:cursor-pointer' />
            </div>
            <div className='  w-8 h-8 bg-linear-to-r from-white to-white rounded-2xl
                flex items-center justify-center shadow-2xl'>
                <TwitterIcon className='h-5 w-5 text-blue-500 hover:cursor-pointer' />
            </div>
            <div className='  w-8 h-8 bg-linear-to-r from-blue-500 to-blue-800 rounded-2xl
                flex items-center justify-center shadow-2xl'>
                <Facebook className='h-5 w-5 text-white hover:cursor-pointer' />
            </div>
          </div>
          
        </div>

        <div className='w-40 mt-10 items-center '>
          <button className='border p-2 flex space-x-2 font-bold text-white hover:cursor-pointer' >
            <ChevronsUp />
            <p>Bake To Up</p> 
          </button>
            
          
          
        </div>

      </div>

      <div className='flex space-x-20 flex-row '>
        <div className='w-30  '>
          <p className='text-xl font-bold bg-linear-to-r from-white to-white/80
              bg-clip-text text-transparent'>Site Page</p>
          
          <div className='flex flex-col items-start text-white/80 mt-10 space-y-3 '>
            {menuItems.map((items) => {
              return(
                <button 
                onClick={() => {setActiveTab(items.id);
                  //setSidebarOpen(false);
                  }}
                className={`hover:cursor-pointer hover:underline font-semibold relative z-10 ${activeTab === items.id ? " text-white shadow-2xl scale-105" : 
                                    "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"}`}
                
                >{items.label}</button>
              )
            })}
          </div>
        </div>

        <div className=''>
          <p className='text-xl font-bold bg-linear-to-r from-white to-white/80
              bg-clip-text text-transparent'>Legal</p>
          
          <div className='flex flex-col items-start text-white/80 mt-10 space-y-3 '>
            {legalItems.map((items) => {
              return(
                <button className='hover:cursor-pointer hover:underline font-semibold relative z-10'>{items.label}</button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer