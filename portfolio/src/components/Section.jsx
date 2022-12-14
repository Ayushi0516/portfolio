import React from 'react'
// import './Styles/Section.css'
import "./style/Section.scss"


const Section = () => {
    return (
        <div className='section' id="aboutme">


            <div className="section__container">


                <div className="section__img">
                    <img src={"https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Ayushi</h1>
                    <p>Full-stack developer specialized in Mern stack, who has a passion for creating clean and intuitive designs.</p>
                    <p>I am a self-motivated and self-driven individual who  always looks for new challenges and opportunities.</p>
                    <p>My goal is to cooperate with the creation of tools that can contribute to the development of a person or a company</p>
                    <p>I possess strong interpersonal and collaborative skills</p>
                    <p>open to remote work and online collaboration</p>
                    <p>After months of rigorous training here I am looking for an opportunity as a full-stack developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section