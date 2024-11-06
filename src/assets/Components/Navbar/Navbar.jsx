import './Navbar.css'
import logo from '../../../../public/images/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-[39px]">
        <a href="/"><img className='w-[99px] h-[35px]' src={logo} alt="Logo" /></a>
        <div className="fuhadShiblu_menu">
          <ul className="flex items-center gap-[32px]">
            <li><a className='w-[81px] h-[38px] text-xl font-semibold font-roboto text-black hover:bg-black hover:text-white hover:font-medium hover:text-md rounded-[18px] transition-all text-center relative leading-[38px]' href="#">Sign in</a></li>
            <li><a className='w-[81px] h-[38px] text-xl font-semibold font-roboto text-black hover:bg-black hover:text-white hover:font-medium hover:text-md rounded-[18px] transition-all text-center relative leading-[38px]' href="#">Register</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar