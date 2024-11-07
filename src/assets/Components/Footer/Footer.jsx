import { FaHeart, FaReact } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="mt-10 text-xl font-light flex flex-wrap justify-center items-center gap-1">Created with <FaHeart className="text-[#ff2020]"/> by <Link className="font-black hover:underline" to={'https://github.com/fuhad-shiblu'}>Fuhad Hasan Shiblu</Link>| Build with <FaReact className="text-xl text-[#2ac3ff]"/><span className="font-bold">ReactJS</span></footer>
    </>
  )
}

export default Footer
