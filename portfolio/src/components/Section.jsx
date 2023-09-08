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
                    <h1>About Me</h1>
                 {/* <p>Full-stack Web developer specialized in Mern stack, who has a passion for creating clean and intuitive designs.</p>
                    <p>I am a self-motivated and self-driven individual who  always looks for new challenges and opportunities.</p>
                    <p>My goal is to cooperate with the creation of tools that can contribute to the development of a person or a company</p>
                    <p>My goal is to cooperate with the creation of tools that can contribute to the development of a person or a company</p>
                    <p>I possess strong interpersonal and collaborative skills</p>
                    <p>open to remote work and online collaboration</p>
                    <p>After months of rigorous training here I am Looking for a Job opportunity in a tech driven organization to showcase one's skills</p>  */}
                   
                    <div className='content'>I am a Full Stack Web Developer and a Computer Science graduate specializing in MERN stack having over 1200+ hours of coding
                     experience and 600+ hours of DSA.I am proficient in creating front-end applications using React, managing state with Redux,
                      and developing RESTful APIs using Node.js and Express. I am also familiar with MongoDB and can use it to store and manage data
                       for web applications. As a MERN Developer, I am eager to learn and grow. I am passionate about building user-friendly and scalable 
                       web applications using the latest technologies. I am a quick learner, detail-oriented, and possess excellent problem-solving and communication skills. My technical
                        skills and eagerness to learn will make me a strong fit for your team. After months of rigorous training here I am Looking for a Job opportunity in a tech driven organization to showcase one's skills.</div>
                </div>



            </div>


        </div>
    )
}

export default Section