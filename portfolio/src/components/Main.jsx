// import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import { FaFacebookSquare,FaInstagramSquare,FaGithub,FaLinkedin } from 'react-icons/fa';
import React from 'react'
//  import './Styles/Main.css'
 import "./style/Main.scss"

 import slackdp from './assests/slackdp.jpeg'
 import resume_photo from "./assests/resume_photo.jpg"
 import Typical from "react-typical";

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                        
                            <p className='hey'>Hey There !</p>
                            <h1>I am Ayushi Gupta</h1>
                            <p className="typical">
                            <Typical
                loop={Infinity}
                steps={[
                    "Passionate Dev",
                    1000 ,
                    "Full Stack Web Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                   ]}
               />
                               </p>
                       
                          
                             <div className="icons">
                        <a className="red" href="https://www.facebook.com/arushi.gupta.334491" target="_blank">
                    <i className="icon"><FaFacebookSquare size={"40px"} /></i>
                   </a>
                   <a href="https://www.instagram.com/_arushi_gupta" target="_blank">
                    <i className="icon"><FaInstagramSquare size={"40px"} /></i>
                   </a>
                   <a href="https://github.com/Ayushi0516" target="_blank">
                    <i className="icon"><FaGithub size={"40px"} /></i>
                   </a>
                   <a href="https://www.linkedin.com/in/ayushi-gupta-b98676236" target="_blank">
                    <i className="icon"><FaLinkedin size={"40px"} /></i>
                   </a>

                   </div>


                    <div className="buttons">
                        <a href="https://github.com/Ayushi0516"  target="_blank"><button>See My Work</button></a>
                        <a href="Ayushi_Gupta_Resume.pdf" download="Ayushi_Gupta_Resume.pdf"><button>Resume</button></a>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={slackdp} width="400px" alt="" />
                       {/* <img src={resume_photo} width="400px" alt=""/> */}
                </div>


            </div>



        </div>
    )
}


export default Main