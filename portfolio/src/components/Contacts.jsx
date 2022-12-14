
import React,{useState} from 'react'
import "./style/Contact.scss"
// import './Styles/Contact.css'
import { FaHeart, FaPhoneSquareAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {MdLocationPin } from 'react-icons/md'

const Contact = () => {
 const [form, setForm] = useState({
            name:"",
          email: "",
          message: ""
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({
              ...form,
              [name]: value
            });
          };


          const handleSubmit = (e) => {
            e.preventDefault();
            console.log(form)
          }
    return (
        <div className='contact' id="contact">
           
            <div className="inputs">
                <h1 >Contact me</h1>
                <div>
                 <form onSubmit={handleSubmit}>
                    <div>
                <input  type="text"  onChange={handleChange} name="name"   value={form.name} placeholder='Name'/>
                <input  type="email" onChange={handleChange}  name="email"   value={form.email}   placeholder='Email'/>
                <input  type="text"   onChange={handleChange}   name="message"  value={form.message}    placeholder='Message' className='message'/>
                <button type="submit" >SEND</button>
                </div>
                </form>
                </div>
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