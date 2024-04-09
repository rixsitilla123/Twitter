import React from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';
import {Home, Explore, Notifications, Messages, Bookmarks, Lists, Profile, More} from '../../Assets/Images/Icons'
import TwitterImg from '../../Assets/Images/logo.svg' ;
import NavbarAvatar from '../../Assets/Images/Feed-Input-Img1.svg'
import NavbarIcon from '../../Assets/Images/Feed-Search-Icon3.svg'

function Navbar() {
  return (
    <nav>
      <a className='inline-block' href="/">
        <img className='cursor-pointer' src={TwitterImg} alt={"Twitter icon"} width={40} height={33}/>
      </a>
      <div className='pt-[35px] flex flex-col mb-[30px]'>
        <NavbarLink url={"/"} title={"Home"}>
            <Home/>
        </NavbarLink>
        <NavbarLink url={"/explore"} title={"Explore"}>
            <Explore/>
        </NavbarLink>
        <NavbarLink url={"/notifications"} title={"Notifications"}>
            <Notifications/>
        </NavbarLink>
        <NavbarLink url={"/messages"} title={"Messages"}>
            <Messages/>
        </NavbarLink>
        <NavbarLink url={"/bookmarks"} title={"Bookmarks"}>
            <Bookmarks/>
        </NavbarLink>
        <NavbarLink url={"/lists"} title={"Lists"}>
            <Lists/>
        </NavbarLink>
        <NavbarLink url={"/profile"} title={"Profile"}>
            <Profile/>
        </NavbarLink>
        <NavbarLink url={"/more"} title={"More"}>
            <More/>
        </NavbarLink>
      </div>
      <button className="w-[230px] mb-[265px] rounded-[27px] bg-[#1D9BF0] py-[16px] px-[87px] text-[#fff] font-sans text-[18px] font-bold leading-[24px] transition hover:opacity-50">Tweet</button>
      <div className='mb-[100px] flex items-center justify-between'>
        <div className="flex items-center space-x-[10px]">
            <img className='cursor-pointer' src={NavbarAvatar} alt="avatar" width={50} height={50}/>
            <div className="flex flex-col">
                <p className="font-sans text-[16px] font-semibold leading-[21px]">Bobur</p>
                <span className="font-sans text-[16px] leading-[21px] opacity-60">@bobur_mavlonov</span>
            </div>
        </div>
        <img className='cursor-pointer' src={NavbarIcon} alt="icon" width={17} height={5}/>
    </div>
    </nav>
  )
}

export default Navbar
