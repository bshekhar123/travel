import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="w-full py-16  bg-gradient-to-t from-[#300136] via-[#7a018a] to-[#660091]">
                <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                    <div className="sm:flex text-center justify-between items-center">
                        <h1 className="text-white text-2xl font-black  md:text-4xl	">BENGAL</h1>
                        <div className="flex justify-between my-6 justify-content w-full sm:max-w-[200px]   ">
                         <a href="https://www.facebook.com/" target="_blank" className="">   <FaFacebook className="icon text-[#4267B2]" /></a>
                         <a href="https://www.instagram.com/" target="_blank" className="">   <FaInstagram className="icon text-[#ff69eb]" /></a>
                            <a href="https://twitter.com/home" target="_blank" className="">    <FaTwitter className="icon text-[#1DA1F2]" /></a>

                        </div>
                    </div>
                    <div className=" text-center text-orange-500   ">West Bengal Tourism &copy; {year}</div>

                </div>
            </div>
        </>
    )
}

export default Footer;