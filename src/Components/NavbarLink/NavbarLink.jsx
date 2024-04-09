import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLink({children, title, url}) {
  return (
    <NavLink className={'flex items-center space-x-[20px] py-[15px]'} to={url}>
      {children}
      <span className='font-serif text-[18px] font-medium leading-[24px]'>{title}</span>
    </NavLink>
  )
}

export default NavbarLink
