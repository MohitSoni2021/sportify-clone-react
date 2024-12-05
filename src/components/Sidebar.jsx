import React from 'react'
import SidebarOptionList from './SidebarOptionList'

const SidebarComponent = () => {
  return (
    <div className='bg-black h-screen p-4 min-w-[270px]'>
      <img src="../../public/assets/Spotify logo.png" className='bg-transparent h-12' alt="" />
      <div className="text-white  flex  my-4 flex-col mt-8">
        
        <SidebarOptionList 
        imagelink={"../../public/assets/Home.png"}
        bg={"bg-gray-600"}
        title={"Home"}
        />
        <SidebarOptionList 
        imagelink={"../../public/assets/Search.png"}
        title={"Search"}
        />
        <SidebarOptionList 
        imagelink={"../../public/assets/Your library.png"}
        title={"Library"}
        />

      </div>
      <div className="text-white  flex  my-4 flex-col">
        
        <SidebarOptionList 
        imagelink={"../../public/assets/Create.png"}
        title={"Create Playist"}
        />
        <SidebarOptionList 
        imagelink={"../../public/assets/Liked.png"}
        title={"Liked Music"}
        />
        <SidebarOptionList 
        imagelink={"../../public/assets/your episodes.png"}
        title={"Your Episode"}
        />

      </div>
      <div className="text-white  flex  my-4 flex-col">
        <SidebarOptionList 
        title={"FAV"}
        />
        <SidebarOptionList 
        title={"Daily Mix 1"}
        />
        <SidebarOptionList 
        title={"Discover Weekly"}
        />
        <SidebarOptionList 
        title={"Malayalam"}
        />
        <SidebarOptionList 
        title={"Dance"}
        />

      </div>
    </div>
  )
}

export default SidebarComponent
