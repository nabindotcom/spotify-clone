import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

function SongItem({ image, name, desc, id }) {
      const {playWithId} = useContext(PlayerContext);
      return (
            <div onClick={()=>playWithId(id)} className=' min-w-[180px] p-2 px rounded hover:bg-[#ffffff26] cursor-pointer'>
                  <img className='rounded' src={image} alt="" />
                  <p className='mt-2 mb-1 font-bold'>{name}</p>
                  <p className='text-slate-200 text-sm'>{desc}</p>
            </div>
      )
}

export default SongItem