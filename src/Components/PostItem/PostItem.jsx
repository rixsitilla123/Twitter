import React from 'react'
import PostAction from '../PostAction/PostAction'
import FeedPostImg2 from '../../Assets/Images/Feed-Post-img2.svg'
import FeedPostImg3 from '../../Assets/Images/Feed-Post-img3.svg'
import FeedPostImg4 from '../../Assets/Images/Feed-Post-img4.svg'
import FeedPostImg5 from '../../Assets/Images/Feed-Post-img5.svg'
import FeedPostImg6 from '../../Assets/Images/Feed-Post-img6.svg'
import FeedSearchIcon3 from '../../Assets/Images/Feed-Search-Icon3.svg'
import ReweetActive from '../../Assets/Images/ReweetActive.svg'
import LikeActive from '../../Assets/Images/LIkeActive.svg'

function PostItem({avatarIcon, userName, userEmail, postBody, commentCount, reweetCount, likeCount, postMainImg}) {
  return (
    <li className='px-[25px] pt-[30px] pb-[20px] border-[1px] relative border-[#D8D8D8]'>
        <div className="flex items-start">
            <img className='cursor-pointer' src={avatarIcon} alt="Post user Icon" width={60} height={60}/>
            <div className="ml-[15px] flex flex-col">
                <div className="flex space-x-[5px]">
                    <h2 className="text-[#000] font-sans text-[20px] font-bold leading-[27px]">{userName}</h2>
                    <p className="text-[#000] font-sans text-[18px] leading-[24px] opacity-60">{userEmail}</p>
                </div>
                <div className="w-[550px]">
                    <p className="text-[#000] font-sans text-[18xp] leading-[24px]">{postBody}</p>
                </div>
                {postMainImg ? <img className='max-w-[600px] max-h-[400px] mt-[15px] cursor-pointer' src={postMainImg} alt="Post main img" width={600} height={400}/> : ""}
                <ul className='flex items-center space-x-[100px] mt-[22px]'>
                    <PostAction activeIcon={FeedPostImg2} actionIcon={FeedPostImg2} actionCount={commentCount}/>  
                    <PostAction activeColor={"text-green-500"} activeIcon={ReweetActive} actionIcon={FeedPostImg3} actionCount={reweetCount}/>  
                    <PostAction activeColor={"text-red-500"} activeIcon={LikeActive} actionIcon={FeedPostImg4} actionCount={likeCount}/>  
                    <PostAction activeIcon={FeedPostImg5} actionIcon={FeedPostImg5}/>  
                    <PostAction activeIcon={FeedPostImg6} actionIcon={FeedPostImg6}/>  
                </ul>
            </div>
            <img className='ml-[20px] absolute top-[55px] right-[25px] cursor-pointer' src={FeedSearchIcon3} alt={"icon"} width={17} height={4}/>
        </div>
    </li>
  )
}

export default PostItem