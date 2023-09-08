
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//  import './Styles/Header.css'
import "./style/Header.scss"

import CloseIcon from '@mui/icons-material/Close';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div className='header'>

                    <div className="header__logo">
                        <h2> <i>portfolio</i></h2>
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                       
                        <p> <CloseIcon className="close" onClick={showMenu}/></p>
                    </div>
                    <li>
                      
                        <a className="black"  href="#">Home</a> 

                    </li>
                    <li >
                     
                     <a className="black"  href="#aboutme">About Me</a> 
                    </li>
                    <li>
                        
                        <a className="black"  href="#skill">Skills</a>
                    </li>
                    <li>
                       
                        <a className="black" href="#projects">Projects</a>
                    </li>
                  
                    <li>
                        
                        <a className="black" href="#contact">Contacts</a>
                    </li>
                    <li>
                         <a  className="black" href="Ayushi_Gupta_Resume.pdf" download="Ayushi_Gupta_Resume.pdf">Resume</a>
                 </li>
                </ul>
            </nav>

                    <div className="changer">
                      
                        <DensityMediumOutlinedIcon className="menu" onClick={showMenu}  />
                    </div>
                    </div>
    )
}

export default Header