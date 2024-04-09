import React, { useEffect, useState } from 'react'
import FormInputIcon from '../../Components/FormInputIcon/FormInputIcon'
import PostItem from '../../Components/PostItem/PostItem'
import HeaderIcon from '../../Assets/Images/Feed-Header-Icon.svg'
import avatar from'../../Assets/Images/Feed-Input-Img1.svg'
import InputImg2 from '../../Assets/Images/Feed-Input-Img2.svg'
import InputImg3 from '../../Assets/Images/Feed-Input-Img3.svg'
import InputImg4 from '../../Assets/Images/Feed-Input-Img4.svg'
import InputImg5 from '../../Assets/Images/Feed-Input-Img5.svg'
import InputImg6 from '../../Assets/Images/Feed-Input-Img6.svg'
import FeedPostAvatarImg1 from '../../Assets/Images/Feed-Post-Avatar-img1.svg'
import FeedPostAvatarImg2 from '../../Assets/Images/Feed-Post-Avatar-img2.svg'
import FeedPostAvatarImg3 from '../../Assets/Images/Feed-Post-Avatar-img3.svg'
import FeedPostMainImg from '../../Assets/Images/Feed-Post-Main-img.jpeg'
function Home({setState}) {
  const [posts, setPosts] = useState([
    {
      id:1,
      avatarIcon: FeedPostAvatarImg1,
      userName: 'Designsta',
      userEmail: '@inner',
      postBody: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: 10,
      rewetCount: 1,
      likeCount: 8,
      postMainImg: null
    },
    {
      id:2,
      avatarIcon: FeedPostAvatarImg2,
      userName: 'cloutexhibition',
      userEmail: '@RajLahoti',
      postBody: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: null,
      rewetCount: 5,
      likeCount: 9,
      postMainImg: null
    },
    {
      id:3,
      avatarIcon: FeedPostAvatarImg3,
      userName: 'CreativePhoto',
      userEmail: '@cloutexhibition',
      postBody: "Обетда..... Кечиринглар",
      commentCount: 10,
      rewetCount: 1,
      likeCount: 8,
      postMainImg: FeedPostMainImg
    },
  ])
  const [postImgUrl, setPostImgUrl] = useState(null)
  const handleChangeImg = (evt) => {
    setPostImgUrl(URL.createObjectURL(evt.target.files[0]))
  }
  const handleAddPost = (evt) => {
    evt.preventDefault()
    const data = {
      id: posts.length ? posts[posts.length -1].id + 1 : 1,
      avatarIcon: avatar,
      userName: 'Bobur',
      userEmail: '@bobur_mavlonov',
      postBody: evt.target.userValue.value,
      commentCount: 0,
      rewetCount: 0,
      likeCount: 0,
      postMainImg: postImgUrl ? postImgUrl : 0
    }
    setPosts([data, ...posts])
    evt.target.reset()
  }
  useEffect(() => {
    setState(false)
  }, [])
  return (
    <div className=''>
      <div className='p-[20px] flex items-center justify-between border-b-[1px] '>
        <h2 className='text-[24px] font-bold font-serif leading-[32px] cursor-pointer'>Home</h2>
        <button>
          <img src={HeaderIcon} alt="icon" width={24} height={24}/>
        </button>
      </div>
      <form onSubmit={handleAddPost} className='px-[30px] pt-[25px] pb-[55px] border-b-[1px] relative'>
        <div className="flex space-x-[15px]">
          <img className='w-[60px] h-[60px] cursor-pointer' src={avatar} alt="avatar" width={60} height={60}/>
          <div className='w-full'>
            <input className='w-full p-2 border-b-[1px] focus:border-[#1D9BF0] outline-none placeholder:text-[22px] placeholder:font-semibold placeholder:leading-[29px]' name='userValue' required type="text" placeholder="What's happening"/>
            <div className="mt-[32px] flex items-center space-x-[20px]">
              <label className='w-[20px] h-[20px] relative z-10 cursor-pointer'>
                <FormInputIcon url={InputImg2}/>
                <input onChange={handleChangeImg} className='absolute top-0 bottom-0 left-0 right-0 z-50 opacity-0 cursor-pointer' type="file"/>
              </label>
              <label className='w-[20px] h-[20px]'><FormInputIcon url={InputImg3}/></label>
              <label className='w-[20px] h-[20px]'><FormInputIcon url={InputImg4}/></label>
              <label className='w-[20px] h-[20px]'><FormInputIcon url={InputImg5}/></label>
              <label className='w-[20px] h-[20px]'><FormInputIcon url={InputImg6}/></label>
            </div>
          </div>
        </div>
        <button className="bg-[#1D9BF0] w-[115px] py-[13px] rounded-[40px] text-[20px] opacity-40 hover:opacity-100 transition text-white font-semibold absolute bottom-[5px] right-[18px]">Tweet</button>
      </form>
      <ul>
        {posts.map(item => (
          <PostItem key={item.id} avatarIcon={item.avatarIcon} userName={item.userName} userEmail={item.userEmail} postBody={item.postBody} commentCount={item.commentCount} reweetCount={item.rewetCount} likeCount={item.likeCount} postMainImg={item.postMainImg}/>
        ))}
      </ul>
    </div>
  )
}

export default Home