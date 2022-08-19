
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import './Styles/Header.css'

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
                        <Link to='/'>Home</Link>
                    </li>
                    <li >
                     
                        <a href="#aboutme">About Me</a>
                    </li>
                    <li>
                        
                        <a href="#skill">Skills</a>
                    </li>
                    <li>
                       
                        <a href="#project">Project</a>
                    </li>
                   <li>
                 
                   <a href="#test">Testimonial</a>
                   </li>
                    <li>
                        
                        <a href="#contact">Contacts</a>
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