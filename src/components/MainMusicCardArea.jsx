import React from 'react'
import MajorCategoryContainerComponent from './MajorCategoryContainer'
import LongGoodMorningCardComponent from './LongGoodMorningCard'
import MusicCardAndPlayerComponent from './MusicCardAndPlayer'

const MainMusicCardAreaComponent = () => {
  return (
    <div className='bg-slate-800 w-full flex justify-center'>
      <div className=" w-11/12 mt-3 flex flex-col gap-6">


        <div className=" flex justify-between">
          <img src="../../public/assets/top arrow navigation.png" className='h-8' alt="" />
          <img src="../../public/assets/User.png" className='h-9' alt="" />
        </div>

        <MajorCategoryContainerComponent
        title={"Good Morning"}
        fontsize={"text-4xl"}
        children={
          <div className='grid grid-cols-4 gap-3'>
            <LongGoodMorningCardComponent 
              title={"Liked Music"}
              imgLink={"../../public/assets/Liked.png"}
            />
            <LongGoodMorningCardComponent 
              title={"Neffex Playlist"}
              imgLink={"../../public/assets/image4.png"}
            />
            <LongGoodMorningCardComponent 
              title={"K / DA"}
              imgLink={"../../public/assets/image3.png"}
            />
            <LongGoodMorningCardComponent 
              title={"Dance"}
              imgLink={"../../public/assets/image1.png"}
            />
            <LongGoodMorningCardComponent 
              title={"Electronic Mix"}
              imgLink={"../../public/assets/image2.png  "}
            />
          </div>
        }
        />

        <MajorCategoryContainerComponent 
          title={"Show Your Might Like"}
          subtitle={"SEE ALL"}
          fontsize={"text-3xl"}
          children={
            <div className='overflow-x-hidden flex gap-3'>

              <MusicCardAndPlayerComponent 
                imgLink={"../../public/assets/image9.png"}
              />
              <MusicCardAndPlayerComponent 
                imgLink={"../../public/assets/image5.png"}
              />
              <MusicCardAndPlayerComponent 
                imgLink={"../../public/assets/image6.png"}
              />
              <MusicCardAndPlayerComponent 
                imgLink={"../../public/assets/image7.png"}
              />
              <MusicCardAndPlayerComponent 
                imgLink={"../../public/assets/image8.png"}
              />

            </div>
          }
        />




      </div>
    </div>
  )
}

export default MainMusicCardAreaComponent
