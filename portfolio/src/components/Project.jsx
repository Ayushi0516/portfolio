

// import  "./Styles/Project.css"
import  "./style/Project.scss"
import { FaReact,FaHtml5 } from "react-icons/fa"
import {SiRedux ,SiCss3,SiJavascript,SiChakraui,SiNetlify} from "react-icons/si"
import{AiFillHtml5}from "react-icons/ai"



const Project=()=>{
    return(
        <div className="purple" id="project">
             <h2 className="kill">PROJECTS</h2>
        <div className="project-box">
       
              
        <div className="project-box3">
                    <div className="plural">
                    <img width="100%"  src="data:image/png;base64,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"alt="" />
                  
                   </div>
                   <div className="sight">
                   <h4 className="bg"> Website:himalayausa</h4>
                    <p>Himalaya offers a wide range of clinically-studied herbal supplements, toothpaste and personal care products.It  is trusted for head to heel range of herbal products.Shop our products online, see product prices</p>
                    <p className="tech">TECH STACK</p>
                    <p><FaReact color="brown" size="30px"/> <SiRedux color="brown" size="30px"/> <SiJavascript color="brown" size="30px"/> <SiChakraui color="brown" size="30px"/></p>
                    <a href="https://himalayacs8853.netlify.app" ><button>Live</button></a>
                    <a href="https://github.com/a11yus/HimalayaUSA" ><button>Github</button></a>
                  
                   </div>
                </div>
              
              
              
              
              
              
              
              
              <div className="project-box1">
            <div className="plural">
                    
                    <img className="pro" width="100%" src="data:image/png;base64,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" alt="" />
                 
                    </div>
                    <div className="sight">
                    <h4 className="bg"> Website: Pluralsight.com</h4>
                   <p>Pluralsight is an American privately held online education company that offers a variety of video training courses for software developers, and creative professionals through its website.</p>
                   <p className="tech">TECH STACK </p>
                   <p className="react"><FaHtml5 size="33px" color="brown"/>  <SiCss3  color="brown"  size="30px"/> <SiJavascript  color="brown"  size="30px"/> <SiNetlify  color="brown" size="30px"/></p>

                  <a  href="https://pluralsiteclonechillpill.netlify.app/" ><button>Live</button></a> 
                  <a href="https://github.com/KapilKumar7/pluralsightclone" > <button >Github</button></a>
                    </div>
                   
                  
                   
                </div>
                <div className="project-box2">
                    <div className="plural">
                    <img width="100%"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVdkSo__nOkvJNtwyJCVEdtdEPDQKUV1DHw&usqp=CAU"alt="" />
                  
                   </div>
                   <div className="sight">
                   <h4 className="bg"> Website:Orbitz.com</h4>
                    <p>Orbitz.com is a travel fare aggregator website and travel metasearch engine. The website is owned by Orbitz Worldwide, Inc., a subsidiary of Expedia Group. All Fares in One Place.</p>
                    <p className="tech">TECH STACK</p>
                    <p><FaHtml5 size="33px" color="brown"/>  <SiCss3  color="brown"  size="30px"/> <SiJavascript  color="brown"  size="30px"/> <SiNetlify  color="brown" size="30px"/></p>
                   <a href="http://our-orbitz-clone.netlify.app"><button>Live</button></a> 
                   <a href="https://github.com/jitesh-95/Orbitz"><button>Github</button></a> 
                 
                   </div>
                </div>

                

        </div>
        </div>
    )
    
}
export default Project