import React from 'react'
import MusicInfoCardComponent from './MusicInfoCard'

const MusicPlayerComponent = () => {
  return (
    <div className='p-3 bg-gray-800 text-white flex items-center justify-between absolute bottom-0 w-full'>
      <MusicInfoCardComponent />
      <img src="../../public/assets/Music Player Options.png" alt="" className='w-4/12'/>
      <img src="../../public/assets/Right options.png" className='w-2/12 h-7' alt="" />
    </div>
  )
}

export default MusicPlayerComponent
