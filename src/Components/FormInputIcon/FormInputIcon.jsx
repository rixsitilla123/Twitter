import React from 'react'

function FormInputIcon({url}) {
  return (
    <button className='cursor-pointer' type='button'>
        <img className='cursor-pointer' src={url} alt="icon" width={20} height={20}/>
    </button>
  )
}

export default FormInputIcon