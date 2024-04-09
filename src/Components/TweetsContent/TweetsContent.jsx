import React from 'react'

import TweetsIcons from '../TweetsIcons/TweetsIcons'
import avatarIcon from '../../Assets/Images/Feed-Input-Img1.svg'
import FeedPostImg2 from '../../Assets/Images/Feed-Post-img2.svg'
import FeedPostImg3 from '../../Assets/Images/Feed-Post-img3.svg'
import FeedPostImg4 from '../../Assets/Images/Feed-Post-img4.svg'
import FeedPostImg5 from '../../Assets/Images/Feed-Post-img5.svg'
import FeedPostImg6 from '../../Assets/Images/Feed-Post-img6.svg'
import FeedSearchIcon3 from '../../Assets/Images/Feed-Search-Icon3.svg'

function TweetsContent({postBody}) {
  return (
    <li className='px-[25px] pt-[30px] pb-[20px] border-[1px] relative border-[#D8D8D8]'>
        <div className="flex items-start">
            <img className='cursor-pointer' src={avatarIcon} alt="Post user Icon" width={60} height={60}/>
            <div className="ml-[15px] flex flex-col">
                <div className="flex space-x-[5px]">
                    <h2 className="text-[#000] font-sans text-[20px] font-bold leading-[27px]">Bobur</h2>
                    <p className="text-[#000] font-sans text-[18px] leading-[24px] opacity-60">@bobur_mavlonov</p>
                </div>
                <div className="w-[550px]">
                    <p className="text-[#000] font-sans text-[18xp] leading-[24px]">{postBody}</p>
                </div>
                <ul className='flex items-center space-x-[100px] mt-[22px]'>
                  <TweetsIcons imgUrl={FeedPostImg2} SpanCount={10}/>
                  <TweetsIcons imgUrl={FeedPostImg3} SpanCount={1}/>
                  <TweetsIcons imgUrl={FeedPostImg4} SpanCount={8}/>
                  <TweetsIcons imgUrl={FeedPostImg5}/>
                  <TweetsIcons imgUrl={FeedPostImg6}/>
                </ul>
            </div>
            <img className='ml-[20px] absolute top-[55px] right-[25px] cursor-pointer' src={FeedSearchIcon3} alt={"icon"} width={17} height={4}/>
        </div>
    </li>
  )
}

export default TweetsContent