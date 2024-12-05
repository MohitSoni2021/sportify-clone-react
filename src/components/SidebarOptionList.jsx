import React from 'react'

const SidebarOptionList = ({imagelink, title, bg}) => {
  return (
    <div className={`flex gap-2 items-center p-2 px-3 font-bold  w-full rounded-md ${bg}`}>
          <img src={imagelink} className='h-5' alt="" />
          {title}
    </div>
  )
}

export default SidebarOptionList
