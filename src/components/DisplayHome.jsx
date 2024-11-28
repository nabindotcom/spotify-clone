import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'
export const DisplayHome = () => {

      return (
            <div>
                  <Navbar />
                  <div className='my-5 font-bold text-2xl'>
                        <h1 className='text-2xl my-5 font-bold'>Featured Charts</h1>
                        <div className='mt-4 flex overflow-auto'>
                              {albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} id={item.id} desc={item.desc} />))}
                        </div>
                  </div>
                  <div className='my-5 font-bold text-2xl'>
                        <h1 className='text-2xl my-5 font-bold'>Today's Biggest Hits</h1>
                        <div className='mt-4 flex overflow-auto'>
                              {songsData.map((item, index) => (<SongItem key={index} image={item.image} name={item.name} id={item.id} desc={item.desc} />))}
                        </div>
                  </div>
            </div>
      )
}
