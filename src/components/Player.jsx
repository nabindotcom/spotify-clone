import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
function Player() {

      const { track, seekBar, seekBg, play, playStatus, pause, time, playPrevious, playNext, seekSong } = useContext(PlayerContext);
      // if (time.currentTime.second == time.totalTime.second && time.currentTime.minute == time.totalTime.minute) {
      //       playNext();
      // }
      return (
            <div className='text-white bg-blue-black px-4 h-[10%] flex justify-between items-center'>
                  <div className='gap-4 hidden lg:flex items-center'>
                        <img className='w-12' src={track.image} alt="" />
                        <div>
                              <p>{track.name}</p>
                              <p>{track.desc.slice(0, 12)}</p>
                        </div>
                  </div>
                  <div className='flex flex-col items-center gap-1 m-auto'>
                        <div className='flex gap-4'>
                              <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                              <img onClick={playPrevious} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                              {playStatus
                                    ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                                    : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                              }


                              <img onClick={playNext} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                              <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                        </div>
                        <div className='flex items-center gap-5'>
                              <p>{time.currentTime.minute} : {time.currentTime.second}</p>
                              <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                                    <hr ref={seekBar} className='bg-green-800 w-0 h-1 border-none' />
                              </div>
                              <p>{time.totalTime.minute} : {time.totalTime.second}</p>
                        </div>
                  </div>
                  <div className='lg:flex hidden gap-2 items-center opacity-75'>
                        <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />
                        <div className='h-1 w-12 bg-white rounded-full'>

                        </div>
                        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
                        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="" />
                  </div>
            </div>
      )
}

export default Player