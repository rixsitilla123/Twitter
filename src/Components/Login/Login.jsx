import React from 'react';
import LogoImg from '../../Assets/Images/logo.svg';

function Login({setToken}) {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      email:evt.target.email.value,
      password:evt.target.password.value
    }
    setToken(data)
    window.localStorage.setItem("token", JSON.stringify(data))
  }
  return (
    <div className='container mx-auto mt-[60px] w-[450px]'>
        <div className='mb-[36px] text-left'>
            <img className='mb-[40px]' src={LogoImg} alt={"Logo"} width={50} height={41}/>
            <h1 className='text-[#000] font-serif text-[42px] font-black leading-[49px]'>Log in to Twitter</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input className='w-full border-[1px] border-[rgba(0_0_0_0.2)] border-solid rounded-[6px] mb-[25px] py-[23px] pl-[20px]' name='email' type="text" placeholder='Phone number, email address' required autoComplete='off'/>
            <input className='w-full border-[1px] border-[rgba(0_0_0_0.2)] border-solid rounded-[6px] mb-[25px] py-[23px] pl-[20px]' name='password' type="password" placeholder='Password' required autoComplete='off'/>
            <button className='w-full py-[20px] px-[195px] bg-[#1DA1F2] rounded-[76px] text-white font-serif text-[18px] font-bold leading-[24px] text-center hover:opacity-50' type='submit'>
                Log In  
            </button>
            <div className='mt-[40px] flex items-center justify-between'>
                <a className='text-[#1DA1F2] font-serif text-[18px] leading-[24px]' href="#">Forgot password?</a>
                <a className='text-[#1DA1F2] font-serif text-[18px] leading-[24px]' href="#">Sign up to Twitter</a>
            </div>
      </form>
    </div>
  )
}

export default Login
