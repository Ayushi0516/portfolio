import { useEffect } from "react"
import { useState } from "react"
import {skill} from "./utils/skill"
import './Styles/Skills.css'
import Marquee from "react-fast-marquee"

const Skills=()=>{
const[help,setHelp]=useState([])
return(
    <div className="box1" id="skill">
    <h2 className="kill">SKILLS</h2>
    <div className="box3" >
       
         <Marquee 
         gradient={false} 
         speed={80} 
         pauseOnHover={true}
         pauseOnClick={true} 
         delay={0}
         play={true} 
         direction="left"
          >
        {skill.map((item)=>(
            <div className="box2">
                <img src={item.src} width="100px"/>
                <h3>{item.label}</h3>
                </div>

        ))}
        </Marquee>
    </div>
    </div>
)

}
export default Skills