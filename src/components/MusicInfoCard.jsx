import React from 'react'

const MusicInfoCardComponent = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src="../../public/assets/image9.png" className='h-16 w-16' alt="" />
      <div className=''>
        <p className="font-bold">Dreaming On</p>
        <p className='text-xs text-center'>NEFFEX</p>
      </div>
      <img src="../../public/assets/bx_bxs-heart.png" className='h-7 w-7' alt="" />
    </div>
  )
}

export default MusicInfoCardComponent
