import React, { useState } from 'react'
import SearchContent from '../SearchContent/SearchContent'
import SearchFollow from '../SearchFollow/SearchFollow'
import FeedSearchIcon1 from '../../Assets/Images/Feed-Search-Icon1.svg'
import FeedSearchIcon2 from '../../Assets/Images/Feed-Search-Icon2.svg'
import FeedSearchAvatarImg1 from '../../Assets/Images/Feed-Search-Avatar-img1.svg'
import FeedSearchAvatarImg2 from '../../Assets/Images/Feed-Search-Avatar-img2.svg'
import ProfileSeaarchMain from '../../Assets/Images/ProfileSearchMainImg.png'

function Search({state}) {
  return (
    <div className=''>
        <div className="py-[16px] mb-[20px] pl-[22px] pr-[10px] bg-[#EFF3F4] rounded-[30px]">
            <label className='flex items-center space-x-[23px]'>
                <img className='cursor-pointer' src={FeedSearchIcon1} alt="icon" width={20} height={20}/>
                <input className='w-full bg-transparent border-b-[1px] border-transparent outline-none focus:border-[#1D9BF0]' type="text" placeholder='Search Twitter' autoComplete='off'/>
            </label>
        </div>
        <div className="rounded-[10px] bg-[#F7F9F9] px-[15px] pt-[20px] pb-[30px] mb-[20px]">
            <div className="pb-[20px] flex itemms-center justify-between">
                <h3 className="font-serif text-[24px] font-bold leading-[32px]">Trends for you</h3>
                <img className='cursor-pointer' src={FeedSearchIcon2} alt="icon" width={24} height={24}/>
            </div>
            <div className="pb-[30px] space-y-[15px]">
                <SearchContent/>
                <SearchContent/>
                <SearchContent/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            </div>
            <button className="text-[#1DA1F2]  border-none font-sans text-[18px] leading-[100%]">Show more</button>
        </div>
        <div className="bg-[#F7F9F9] rounded-[10px] px-[12px] pt-[20px] pb-[25px] mb-[30px]">
            <h3 className="font-sans text-[24px] font-bold leading-[32px] pb-[25px]">You might like</h3>
            <div className="mb-[30px] space-y-[25px]">
                <SearchFollow url={FeedSearchAvatarImg1} text={'Mushtariy'} span={'@Mushtar565266'}/>
                <SearchFollow url={FeedSearchAvatarImg2} text={'Shuhratbek'} span={'@mrshukhrat'}/>
            </div>
            <button className="text-[#1DA1F2]  border-none font-sans text-[18px] leading-[100%]">Show more</button>
        </div>
        <div className="w-[313px] space-y-[10px] mb-[100px]">
            <p className="text-[#536471] font-sans text-[16px] leading-[21px]">Terms of Service Privacy Policy Cookie Policy</p>
            <p className="text-[#536471] font-sans text-[16px] leading-[21px]">Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
        </div>
        {state && 
            <>
                <div className="py-[16px] mb-[11px] pl-[22px] pr-[10px] bg-[#EFF3F4] rounded-[30px]">
                    <label className='flex items-center space-x-[23px]'>
                        <img className='cursor-pointer' src={FeedSearchIcon1} alt="icon" width={20} height={20}/>
                        <input className='w-full bg-transparent border-b-[1px] border-transparent outline-none focus:border-[#1D9BF0]' type="text" placeholder='Search Twitter' autoComplete='off'/>
                    </label>
                </div>
                <img className='cursor-pointer mb-[20px]' src={ProfileSeaarchMain} alt="icon" width={"100%"} height={180}/>
                <div className="bg-[#F7F9F9] rounded-[10px] px-[12px] pt-[20px] pb-[25px] mb-[20px]">
                    <h3 className="font-sans text-[24px] font-bold leading-[32px] pb-[25px]">You might like</h3>
                    <div className="mb-[30px] space-y-[25px]">
                        <SearchFollow url={FeedSearchAvatarImg1} text={'Mushtariy'} span={'@Mushtar565266'}/>
                        <SearchFollow url={FeedSearchAvatarImg2} text={'Shuhratbek'} span={'@mrshukhrat'}/>
                    </div>
                    <button className="text-[#1DA1F2]  border-none font-sans text-[18px] leading-[100%]">Show more</button>
                </div>
                <div className="rounded-[10px] bg-[#F7F9F9] px-[15px] pt-[20px] pb-[30px] mb-[100px]">
                    <div className="pb-[20px] flex itemms-center justify-between">
                        <h3 className="font-serif text-[24px] font-bold leading-[32px]">Trends for you</h3>
                        <img className='cursor-pointer' src={FeedSearchIcon2} alt="icon" width={24} height={24}/>
                    </div>
                    <div className="pb-[30px] space-y-[15px]">
                        <SearchContent/>
                        <SearchContent/>
                        <SearchContent/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    </div>
                    <button className="text-[#1DA1F2]  border-none font-sans text-[18px] leading-[100%]">Show more</button>
                </div>
            </>
        }
    </div>
  )
}

export default Search