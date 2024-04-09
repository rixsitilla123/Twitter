import React from 'react'
import HeaderIcon from '../../Assets/Images/Feed-Header-Icon.svg'
function Lists() {
  return (
    <div className='p-[20px] flex items-center justify-between border-b-[1px] '>
        <h2 className='text-[24px] font-bold font-serif leading-[32px] cursor-pointer'>Lists</h2>
        <button>
          <img src={HeaderIcon} alt="icon" width={24} height={24}/>
        </button>
    </div>
  )
}

export default Lists