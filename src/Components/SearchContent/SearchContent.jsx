import React from 'react'
import FeedSearchIcon3 from '../../Assets/Images/Feed-Search-Icon3.svg'
function SearchContent() {
  return (
    <div className='flex items-center justify-between relative'>
        <div className="text-left space-y-[3px]">
            <p className="text-[#393B41] font-serif text-[16px] leading-[21px] opacity-60">Trending in Germany</p>
            <h5 className="font-serif text-[20px] font-semibold leading-[27px]">Revolution</h5>
            <span className="text-[#393B41] font-sans text-[16px] leading-[21px]">50.4K Tweets</span>
        </div>
        <img className='absolute right-0 top-[17px] cursor-pointer' src={FeedSearchIcon3} alt="icon" width={17} height={5}/>
    </div>
  )
}

export default SearchContent