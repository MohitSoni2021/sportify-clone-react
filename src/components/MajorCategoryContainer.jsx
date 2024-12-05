import React from 'react'

const MajorCategoryContainerComponent = ({title, children, fontsize, subtitle}) => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex justify-between'>
      <h1 className={`text-white ${fontsize}`}>{title}</h1>
      <p className='text-white'>{subtitle}</p>
      </div>
      {children}
    </div>
  )
}

export default MajorCategoryContainerComponent
