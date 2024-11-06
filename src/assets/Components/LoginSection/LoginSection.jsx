import './LoginSection.css'
import bot from '../../../../public/images/bot.png'
import { Link } from 'react-router-dom'
import google from '../../../../public/images/google.png'
import facebook from '../../../../public/images/facebook.png'
import apple from '../../../../public/images/apple.png'
import { useState } from 'react'

const LoginSection = () => {
  //========== State Part ==========//
  const [name , setName]        = useState()
  const [nameErr , setNameErr]  = useState()
  const [pass , setPass]        = useState()
  const [passErr , setPassErr]  = useState()

  //========== Functions Part ==========//
  const handleName = (e)=>{
    setName(e.target.value)
    setNameErr('')
  }
  const handlePass = (e)=>{
    setPass(e.target.value)
    setPassErr('')
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name){
      setNameErr('Please enter your username')
    }else if(!pass){
      setPassErr('Please enter your Password')
    }else{
      alert('Login Successfull')
    }
  }
  return (
    <>
    <div className="container mx-auto">
        <div className="flex justify-between mt-[180px]">
            <img className='w-[587px] h-[770px] hidden md:block' src={bot} alt="Bot" />
            <form onSubmit={handleSubmit} className='w-[372px]'>
                <h1 className='text-center text-4xl font-roboto font-semibold mb-[55px]'>Hello ! <span className='block'>Welcome Back</span></h1>
                <input onChange={handleName} className='w-full text-[22px] font-roboto font-light pt-[18px] pb-[17px] pl-[25px] border-none outline-none rounded-[8px] placeholder:text-[#9A9A9A] border-2 focus:border-solid focus:border-black transition-all' type="text" placeholder='Enter Username'/>
                <p className='text-sm pl-5 text-[#ff2020]'>{nameErr}</p>
                <input onChange={handlePass} className='w-full text-[22px] font-roboto font-light pt-[18px] pb-[17px] pl-[25px] border-none outline-none rounded-[8px] placeholder:text-[#9A9A9A] mt-5 mb-[14px] border-2 focus:border-solid focus:border-black transition-all' type="password" placeholder='Enter Password'/>
                <p className='text-sm pl-5 text-[#ff2020]'>{passErr}</p>
                <Link className='text-[18px] text-black font-extralight font-roboto flex justify-end hover:underline transition-all' to={'#'}>Forgot Password ?</Link>
                <button className='w-full pt-[18px] pb-[17px] rounded-[8px] text-white bg-[#050505] active:scale-[1.1] transition-all mt-[47px] mb-[35px] text-[18px] font-roboto font-black'>Sign In</button>
                <p className='fuhadShiblu_ocw text-[18px] font-normal font-inter text-center text-black relative'>Or Continue With</p>
                <div className="flex justify-between items-center mt-[42px] mb-[52px]">
                    <Link className='w-[87px] h-[52px] bg-black rounded-[10px] flex justify-center items-center active:scale-[1.1] transition-all' to={'#'}><img className='w-[30px] h-[30px]' src={google} alt="Google" /></Link>
                    <Link className='w-[87px] h-[52px] bg-black rounded-[10px] flex justify-center items-center active:scale-[1.1] transition-all' to={'#'}><img className='w-[30px] h-[30px]' src={facebook} alt="Facebook" /></Link>
                    <Link className='w-[87px] h-[52px] bg-black rounded-[10px] flex justify-center items-center active:scale-[1.1] transition-all' to={'#'}><img className='w-[30px] h-[30px]' src={apple} alt="Apple" /></Link>
                </div>
                <div className="text-center text-xl text-black font-roboto font-light">Don’t Have An Account ? <Link className='font-black hover:underline' to={'#'}>Create Account !</Link></div>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginSection