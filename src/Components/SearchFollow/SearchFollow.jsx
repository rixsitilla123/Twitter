import React from 'react'

function SearchFollow({url, text, span}) {
  return (
    <div className='flex items-center justify-between'>
        <div className="flex space-x-[13px]">
            <img className='cursor-pointer' src={url} alt="avatar" width={60} height={60}/>
            <div className="flex flex-col">
                <p className="font-sans text-[18px] font-semibold leading-[24px]">{text}</p>
                <span className="font-sans text-[18px] leading-[24px] opacity-60">{span}</span>
            </div>
        </div>
        <button className="w-[92px] py-[10px] px-[18px] rounded-[50px] bg-[#000] text-[#fff] border-[1px] transition hover:border-[##1DA1F2] hover:bg-[#fff] hover:text-[#1DA1F2] font-sans text-[18px] font-bold leading-[100%]">Follow</button>
    </div>
  )
}

export default SearchFollow