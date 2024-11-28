import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function DisplayAlbum() {
      const { id } = useParams();
      const albumData = albumsData[id];
      const {playWithId} = useContext(PlayerContext);

      return (
            <>
                  <Navbar />
                  <div className='flex gap-8 mt-10 flex-col md:flex-row md:items-end '>
                        <img className='w-48 rounded' src={albumData.image} alt="" />
                        <div className='flex flex-col  justify-center'>
                              <p>Playlist</p>
                              <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
                              <h4>{albumData.desc}</h4>
                              <p className='mt-1'>
                                    <img className='w-5 inline-block' src={assets.spotify_logo} alt="" />
                                    <b>Spotify</b>
                                     ·1,233,390 likes
                                    <b> ·50 Songs ,</b> 
                                     about 2 hrs 30 min
                              </p>
                        </div>
                  </div>
                  <div className='grid grid-cols-3 sm:grid-cols-4 mb-4 pl-2 mt-10 text-[#a7a7a7]'>
                        <p><b className='mr-4'>#</b>Title</p>
                        <p>Album</p>
                        <p className='hidden sm:block'>Date Added</p>
                        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
                  </div>
                  <hr />
                  {
                        songsData.map((item,index)=>(
                              <div onClick={()=>playWithId(index)} key={index} className='grid grid-cols-3 sm:grid-cols-4 mt-4 gap-2 items-center p-2 cursor-pointer text-[#a7a7a7] hover:bg-[#ffffff2b]'>
                                    <p className='text-white  items-center'>
                                          <b className='mr-4 text-[#a7a7a7]'>{item.id+1}</b>
                                          <img className=' inline w-10 mr-5' src={item.image} alt="" />
                                          {item.name}
                                    </p>
                                    <p>{albumData.name}</p>
                                    <p className='hidden sm:block'>5 day ago</p>
                                    <p className='m-auto w-4'>{item.duration}</p>
                              </div>
                        ))
                  }
            </>
      )
}

export default DisplayAlbum