import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
      const navigate = useNavigate();
      return (
            <>

                  <div className='w-full flex  justify-between  items-center font-semibold'>
                        <div className='flex items-center gap-2'>
                              <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_left} alt="" />
                              <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_right} alt="" />
                        </div>
                        <div className='flex items-center gap-4'>
                              <p className='bg-white text-black text-[15px] rounded-2xl px-4 py-1 hidden md:block cursor-pointer'>Explore Premium</p>
                              <p className='bg-black text-white text-[15px] rounded-2xl px-4 py-1 hidden md:block cursor-pointer'>Install App</p>
                              <p className='bg-purple-500 h-8 w-8 rounded-2xl cursor-pointer text-black flex items-center justify-center'>N</p>
                        </div>
                  </div>
                  <div className='flex gap-2 items-center mt-4'>
                        <p className='py-1 px-3 text-black  bg-white rounded-2xl cursor-pointer'>All</p>
                        <p className='py-1 px-3  bg-black rounded-2xl cursor-pointer'>Music</p>
                        <p className='py-1 px-3  bg-black rounded-2xl cursor-pointer'>Podcasts</p>
                  </div>
            </>
      )
}

export default Navbar