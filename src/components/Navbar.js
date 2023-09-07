import React, { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from "../assets/logo.png"
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black'>
            <div>
                <img src={Logo} alt="LogoImage" style={{width: '120px'}} />
            </div>

                {/* Menu */}
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

            {/* Hamburger */ }
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? "hidden" : "absolute top-0 lef- w-full h-screen bg-[#30475E] flex flex-col justify-center items-center"}>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
            </div>

            {/* Sosial icons di pojok kiri */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="https://www.linkedin.com/in/hafid-kurnianton-123958219/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="https://github.com/hafidkrntn">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F5F5F5]">
                    <a className="flex justify-between items-center w-full text-black" 
                    href="https://mail.google.com/mail/u/0/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F05454]">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="https://drive.google.com/file/d/16Fts1AbWBwTsH1GzPcabzt2KIm89BqTl/view?usp=sharing">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar