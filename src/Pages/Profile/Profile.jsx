import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Arrow from '../../Assets/Images/ArrowBack.svg'
import Avatar from '../../Assets/Images/BoburAvatar.jpeg'
import mainImg from '../../Assets/Images/ProfileMainImg.jpeg'
import {MapIcon, LinkIcon, BirthIcon, DateIcon} from '../../Assets/Images/Icons'
function Profile({setState}) {
  const [activeLink, setActiveLink] = useState("Tweets")
  useEffect(() => {
    setState(true)
  }, [])
  return (
    <div className="">
      <div className="py-[22px] px-[31px] flex items-center space-x-[40px]">
        <button className=""><img src={Arrow} alt="arrow icon" width={30}/></button>
        <div className="flex flex-col">
          <strong className="font-sans font-bold text-[20px] leading-[27px]">Bobur</strong>
          <p className="opacity-60 font-sans text-[16px] leading-[21px]">1,070 Tweets</p>
        </div>
      </div>
      <img src={mainImg} alt="img profile" width={"100%"} height={280}/>
      <div className="flex items-center justify-between px-[25px]">
        <img className='-mt-[78px] cursor-pointer rounded-[50%]' src={Avatar} alt="avatar" width={150} height={150}/>
        <button className="w-[120px] py-[10px] rounded-[50px] border-[1px] border-slate-400 font-sans text-[18px] font-semibold leading-[24px]">Edit profile</button>
      </div>
      <div className="mt-[10px] px-[25px]">
        <h2 className="font-sans text-[24px] font-bold leading-[32px] mb-[3px]">Bobur</h2>
        <p className="mb-[15px] text-[#000] opacity-[60 font-sans text-[16px] leading-[21px]">@bobbur_mavlonov</p>
        <p className="font-sans text-[18px] leading-[24px]">UX&UI designer at <Link to={"#"} className='text-[#1DA1F2]'>@abutechuz</Link></p>
        <div className="flex items-center justify-between mt-[15px]">
          <Link to={'#'} className='w-[125px] flex items-center text-[14px] font-sans leading-[24px] opacity-60 hover:text-[#1DA1F2] space-x-[5px]'><MapIcon/><span>Mashag'daman</span></Link>
          <Link to={'#'} className='w-[180px] flex items-center text-[14px] font-sans leading-[24px] opacity-60 hover:text-[#1DA1F2] space-x-[5px]'><LinkIcon/><span>t.me/boburjon_mavlonov</span></Link>
          <Link to={'#'} className='w-[184px] flex items-center text-[14px] font-sans leading-[24px] opacity-60 hover:text-[#1DA1F2] space-x-[5px]'><BirthIcon/><span>Born November 24, 2000</span></Link>
          <Link to={'#'} className='w-[134px] flex items-center text-[14px] font-sans leading-[24px] opacity-60 hover:text-[#1DA1F2] space-x-[5px]'><DateIcon/><span>Joined May 2020</span></Link>
        </div>
        <div className="flex items-center space-x-[30px] mt-[15px]">
          <p className='font-sans text-[18px] leading-[24px]'><strong className=" mr-[5px] font-bold">67</strong>Following</p>
          <p className='font-sans text-[18px] leading-[24px]'><strong className=" mr-[5px] font-bold">47</strong>Followers</p>
        </div>
      </div>
      <div className="mt-[45px] flex items-center justify-between px-[25px] border-b-[1px] border-slate-400">
        <Link onClick={() => setActiveLink("Tweets")} className={`${activeLink == "Tweets" ? "font-sans text-[18px] font-bold leading-[24px] pb-[15px] border-blue-500" : "font-sans text-[18px] leading-[24px] border-transparent"} border-b-[5px]`} to={''}>Tweets</Link> 
        <Link onClick={() => setActiveLink("Tweets & replies")} className={`${activeLink == "Tweets & replies" ? "font-sans text-[18px] font-bold leading-[24px] pb-[15px] border-blue-500" : "font-sans text-[18px] leading-[24px] border-transparent"} border-b-[5px]`} to={'tweets-replies'}>Tweets & replies</Link>
        <Link onClick={() => setActiveLink("Media")} className={`${activeLink == "Media" ? "font-sans text-[18px] font-bold leading-[24px] pb-[15px] border-blue-500" : "font-sans text-[18px] leading-[24px] border-transparent"} border-b-[5px]`} to={'media'}>Media</Link>
        <Link onClick={() => setActiveLink("Likes")} className={`${activeLink == "Likes" ? "font-sans text-[18px] font-bold leading-[24px] pb-[15px] border-blue-500" : "font-sans text-[18px] leading-[24px] border-transparent"} border-b-[5px]`} to={'likes'}>Likes</Link>
      </div>
      <div><Outlet/></div>
    </div>
  )
}
export default Profile