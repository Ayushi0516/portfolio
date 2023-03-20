
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
                <h1  >Contact me</h1>
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
          <div className='mail'>
          <FaPhoneSquareAlt size={"30px"} className="loc" />
          <p className='number'>8707049776</p>
          </div>
          <div className='mail'>
          <SiGmail size={"30px"} className="loc" /> 
          <p className='number'>ayushigupta0516@gmail.com</p>
          </div>
          <div className='mail'>
          <MdLocationPin size={"30px"} className="loc" />
          <p className='number'>Jhansi,Uttar Pradesh</p>
          </div>
          
        </div>

        <div className='heart'>Made with <FaHeart color={"red"}/> by Ayushi</div>
        </div>
    )
}

export default Contact