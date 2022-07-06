import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "react-scroll"
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className="flex w-full bg-black  fixed justify-between items-center px-4 h-20   z-10 text-white">
                <div>
                    <h1 className="text-2xl font-black  md:text-4xl	">BENGAL</h1>
                </div>
                <ul className="hidden md:flex">
                    <Link to="body" smooth={true} duration={1000} className="hover:cursor-pointer"> <li className="text-[#fa602d]">Home</li></Link>
                    <Link to="place" smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="text-[#fa602d]">Place</li></Link>
                    <Link to="travel" smooth={true} duration={1000} className="hover:cursor-pointer" > <li className="text-[#fa602d]">Travel</li></Link>
                    <Link to="location" smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="text-[#fa602d]">Location</li></Link>

                </ul>
                <div className="hidden md:flex">
                    <BiSearch className="mr-2" size={25} />
                    <BsPerson size={25} />
                </div>


                {/* mobile dropdown */}
                <div onClick={handleNav} className="    md:hidden z-10">
                    {nav ? <AiOutlineClose size={25} /> : <HiOutlineMenuAlt4 size={25} />}

                </div>

                {/* mobile vale */}
                <div onClick={handleNav} className={nav ? " absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>

                    <ul className="">
                        <h1 className="text-2xl font-black  md:text-4xl	">Bengal</h1>
                        <li className="border-b border-black">Home</li>
                        <Link to="place" smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="border-b border-black">Place</li></Link>
                        <Link to="travel" smooth={true} duration={1000} className="hover:cursor-pointer">  <li className="border-b border-black">Travel</li></Link>
                        <Link to="location" smooth={true} duration={1000} className="hover:cursor-pointer"> <li className="border-b border-black">Location</li></Link>

                        <div className="flex flex-col">
                            <button className="p-3 my-6 border bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded">Search</button>
                            <button className="p-3 my-6 border bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded">Account</button>
                            <div className="flex justify-between my-6">
                                <a href="https://www.facebook.com/" target="_blank" className="">   <FaFacebook className="icon text-[#4267B2]" /></a>
                                <a href="https://www.instagram.com/" target="_blank" className="">   <FaInstagram className="icon text-[#ff69eb]" /></a>
                                <a href="https://twitter.com/home" target="_blank" className="">    <FaTwitter className="icon text-[#1DA1F2]" /></a>

                            </div>
                        </div>
                    </ul>



                </div>
            </div>

        </>
    )
};

export default Navbar;