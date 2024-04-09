import React from 'react'

function TweetsIcons({imgUrl, SpanCount}) {
    return (
        <li className="flex items-center space-x-[10px] cursor-pointer">
            <img src={imgUrl} alt="Icons" width={24} height={24} />
            <span className={"text-[#536471] font-sans text-[18px] leading-[21px]"}>{SpanCount}</span>
        </li>
    )
}

export default TweetsIcons