import React from 'react'
import MainMusicCardAreaComponent from './MainMusicCardArea'
import SidebarComponent from './Sidebar'

const UpperHalfComponent = () => {
  return (
    <div className='flex'>
        <SidebarComponent />
        <MainMusicCardAreaComponent />
    </div>
  )
}

export default UpperHalfComponent
