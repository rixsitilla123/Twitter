import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Explore from './Pages/Explore/Explore'
import Notifications from './Pages/Notifications/Notifications'
import Messages from './Pages/Messages/Messages'
import Bookmarks from './Pages/Bookmarks/Bookmarks'
import Lists from './Pages/Lists/Lists'
import Profile from './Pages/Profile/Profile'
import More from './Pages/More/More'
import Search from './Components/Search/Search'
import Tweets from './Pages/Profile/ProfileNestedPages/Tweets'
import TweetsReplies from './Pages/Profile/ProfileNestedPages/TweetsReplies'
import Media from './Pages/Profile/ProfileNestedPages/Media'
import Likes from './Pages/Profile/ProfileNestedPages/Likes'
function Authentication() {
  const [state, setState] = useState(false)
  return (
    <div className='flex container mx-auto'>
      <div className='navbar w-[25%] h-[100vh] overflow-y-auto pt-[30px] pr-[30px]'><Navbar/></div>
      <div className='routes w-[50%] h-[100vh] border-l-[1px] border-r-[1px] overflow-y-auto'>
        <Routes>
          <Route path='/' element={<Home setState={setState}/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          <Route path='/lists' element={<Lists/>}/>
          <Route path='/profile' element={<Profile setState={setState}/>}>
            <Route path='' element={<Tweets/>}/>
            <Route path='tweets-replies' element={<TweetsReplies/>}/>
            <Route path='media' element={<Media/>}/>
            <Route path='likes' element={<Likes/>}/>
          </Route>
          <Route path='/more' element={<More/>}/> 
        </Routes>
      </div>
      <div className='about w-[25%] h-[100vh] pt-[20px] px-[30px] overflow-y-auto'><Search state={state}/></div>
    </div>
  )
}

export default Authentication
