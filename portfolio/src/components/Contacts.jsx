
import React from 'react'

import './Styles/Contact.css'
import { FaHeart, FaPhoneSquareAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {MdLocationPin } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='contact' id="contact">
           
            <div className="inputs">
                <h1>Contact me</h1>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
         <div className='location'>
            <p><FaPhoneSquareAlt size={"30px"} className="loc" />8707049776</p>
            <p><SiGmail size={"30px"} className="loc" /> ayushigupta0516@gmail.com</p>
           <p> <MdLocationPin size={"30px"} className="loc" />Jhansi,India</p>
        </div>

        <div className='heart'>Made with <FaHeart color={"red"}/> by Ayushi</div>
        </div>
    )
}

export default Contact