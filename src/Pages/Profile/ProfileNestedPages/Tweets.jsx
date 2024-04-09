import React from 'react'
import TweetsContent from '../../../Components/TweetsContent/TweetsContent'
import TweetsIcons from '../../../Components/TweetsIcons/TweetsIcons'
import avatarIcon from '../../../Assets/Images/Feed-Input-Img1.svg'
import FeedPostImg2 from '../../../Assets/Images/Feed-Post-img2.svg'
import FeedPostImg3 from '../../../Assets/Images/Feed-Post-img3.svg'
import FeedPostImg4 from '../../../Assets/Images/Feed-Post-img4.svg'
import FeedPostImg5 from '../../../Assets/Images/Feed-Post-img5.svg'
import FeedPostImg6 from '../../../Assets/Images/Feed-Post-img6.svg'
import FeedSearchIcon3 from '../../../Assets/Images/Feed-Search-Icon3.svg'
import PinIcon from '../../../Assets/Images/PinIcon.svg'
import PostMainImg from '../../../Assets/Images/postMainImg.jpeg'
function Tweets() {
  return (
    <ul>
      <li className='px-[25px] pt-[30px] pb-[20px] border-[1px] relative border-[#D8D8D8]'>
        <div className="ml-[45px] mb-[16px] flex items-center space-x-[18px]">
          <img className='cursor-pointer' src={PinIcon} alt="pin icon" width={14} height={17}/>
          <span className="text-[#536471] font-sans text-[16px] font-semibold leading-[21px]">Pinned Tweet</span>
        </div>
        <div className="flex items-start">
            <img className='cursor-pointer' src={avatarIcon} alt="Post user Icon" width={60} height={60}/>
            <div className="ml-[15px] flex flex-col">
                <div className="flex space-x-[5px]">
                    <h2 className="text-[#000] font-sans text-[20px] font-bold leading-[27px]">Bobur</h2>
                    <p className="text-[#000] font-sans text-[18px] leading-[24px] opacity-60">@bobur_mavlonov</p>
                </div>
                <div className="w-[550px]">
                    <p className="text-[#000] font-sans text-[18xp] leading-[24px]">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
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
      <TweetsContent postBody={"Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas."}/>
      <li className='px-[25px] pt-[30px] pb-[20px] border-[1px] relative border-[#D8D8D8]'>
        <div className="flex items-start">
            <img className='cursor-pointer' src={avatarIcon} alt="Post user Icon" width={60} height={60}/>
            <div className="ml-[15px] flex flex-col">
                <div className="flex space-x-[5px]">
                    <h2 className="text-[#000] font-sans text-[20px] font-bold leading-[27px]">Bobur</h2>
                    <p className="text-[#000] font-sans text-[18px] leading-[24px] opacity-60">@bobur_mavlonov</p>
                </div>
                <div className="w-[550px]">
                    <p className="text-[#000] font-sans text-[18xp] leading-[24px]">A bo'pti maskamasman</p>
                </div>
                <img className='max-w-[600px] max-h-[400px] cursor-pointer mt-[15px]' src={PostMainImg} alt="img" width={600} height={400}/>
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
    </ul>
  )
}
export default Tweets