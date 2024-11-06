import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="mt-10 text-xl font-light flex justify-center items-center gap-1">Created with <FaHeart className="text-[#ff2020]"/> by <Link className="font-black hover:underline" to={'https://github.com/fuhad-shiblu'}>Fuhad Hasan Shiblu</Link></footer>
    </>
  )
}

export default Footer