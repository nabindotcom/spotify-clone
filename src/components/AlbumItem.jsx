import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumItem({ image, name, desc, id }) {
      const navigate = useNavigate();
      return (
            <div onClick={() => navigate(`/album/${id}`)} className=' min-w-[180px] p-2 px rounded hover:bg-[#ffffff26] cursor-pointer'>
                  <img className='rounded' src={image} alt="" />
                  <p className='mt-2 mb-1 font-bold'>{name}</p>
                  <p className='text-slate-200 text-sm'>{desc}</p>
            </div>
      )
}

export default AlbumItem