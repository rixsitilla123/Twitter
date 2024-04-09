import React, { useState } from 'react'

function PostAction({actionIcon, actionCount, activeIcon, activeColor}) {
    const [changeAction, setChangeAction] = useState(false)
    const handleClickAction = () => {
        setChangeAction(!changeAction)
    }
    return (
        <li onClick={handleClickAction} className='flex items-center space-x-[10px] cursor-pointer'>
            <img src={changeAction ? activeIcon : actionIcon} alt="post Icons" width={24} height={24} />
            <span className={`${changeAction ? activeColor : "text-[#536471]"} text-[#536471] font-sans text-[18px] leading-[21px]`}>
                {actionCount == 0 ? changeAction ? actionCount + 1 : actionCount : ""}
            </span> 
        </li>
    )
}

export default PostAction