import React from 'react'

const MusicCardAndPlayerComponent = ({imgLink}) => {
  return (
    <div className='p-4 bg-gray-900 rounded-2xl w-fit'>
      <img src={imgLink} alt="" />
      <div className='text-white mt-3 overflow-x-hidden'>
        <h2 className='text-xl font-extrabold'>Weekly Motivation</h2>
        <p>bexion det</p>
      </div>
    </div>
  )
}

export default MusicCardAndPlayerComponent
