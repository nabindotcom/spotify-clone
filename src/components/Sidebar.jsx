import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
      const navigate = useNavigate();
      return (
            <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
                  <div className='h-[15%] rounded flex flex-col justify-around bg-[#121212]'>
                        <div onClick={() => navigate('/')} className='flex gap-3 items-center pl-8 cursor-pointer '>
                              <img className='w-6 ' src={assets.home_icon} alt="" />
                              <p className='font-bold'>Home</p>
                        </div>
                        <div className='flex gap-3 items-center pl-8 cursor-pointer '>
                              <img className='w-6 ' src={assets.search_icon} alt="" />
                              <p className='font-bold'>Search</p>
                        </div>
                  </div>
                  <div className='h-[85%] w-full bg-[#121212]  rounded' >
                        <div className='flex items-center p-4 justify-between'>
                              <div className='flex items-center gap-3 '>
                                    <img className='w-6' src={assets.stack_icon} alt="" />
                                    <p className='font-semibold'>Your Library</p>
                              </div>
                              <div className='flex items-center gap-3'>
                                    <img className='w-5 ' src={assets.arrow_icon} alt="" />
                                    <img className='w-5' src={assets.plus_icon} alt="" />
                              </div>
                        </div>
                        <div className='bg-[#242424] m-2 p-4 font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                              <p className='font-bold'>Create your first playlist</p>
                              <p className='font-extralight '>It's easy we will help you</p>
                              <button className='bg-white text-black px-4 py-1.5 rounded-full mt-4 text-[15px]'>Create Playlist</button>
                        </div>
                        <div className='bg-[#242424] m-2 p-4 font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                              <p className='font-bold'>Let's find some podcasts to follow</p>
                              <p className='font-extralight '>We will keep you update on next episodes</p>
                              <button className='bg-white text-black px-4 py-1.5 rounded-full mt-4 text-[15px]'>Browse Podcasts</button>
                        </div>
                  </div>
            </div>
      )
}

export default Sidebar