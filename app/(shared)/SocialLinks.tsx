import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


type Props = {
    isDark?: boolean;
}

const SocialLinks = ({ isDark =false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href='https://twitter.com' target="_blank" rel="noreferrer">
            <FaTwitter className={`${isDark ? "brightness-0" : ""} hover:opacity-50 w-5 h-5`}/>
        </a>
        <a href='https://discord.com' target="_blank" rel="noreferrer">
            <FaDiscord className={`${isDark ? "brightness-0" : ""} hover:opacity-50 w-5 h-5`}/>
        </a>
        <a href='https://facebook.com' target="_blank" rel="noreferrer">
            <FaFacebook className={`${isDark ? "brightness-0" : ""} hover:opacity-50 w-5 h-5`}/>
        </a>
        <a href='https://google.com' target="_blank" rel="noreferrer">
            <FaGoogle className={`${isDark ? "brightness-0" : ""} hover:opacity-50 w-5 h-5`}/>
        </a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer">
            <FaInstagram className={`${isDark ? "brightness-0" : ""} hover:opacity-50 w-5 h-5`}/>
        </a>
    </div>
  )
}

export default SocialLinks;