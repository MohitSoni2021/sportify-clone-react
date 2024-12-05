import React from 'react'

const LongGoodMorningCardComponent = ({imgLink, title}) => {
  return (
    <div className='flex items-center gap-3 bg-gray-600 rounded-md overflow-hidden'>
        <img src={imgLink} className='h-20' alt="" />
        <h2 className='text-xl font-bold text-white'>{title}</h2>
    </div>
  )
}

export default LongGoodMorningCardComponent
