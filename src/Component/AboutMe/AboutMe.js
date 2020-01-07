import React from 'react';
import './AboutMe.css'
import profileImg from '../../images/profile.jpg'
const AboutMe = ()=>{
    return(
        <div className='about-me'>
            <span>About Me</span>
            <img src={profileImg} alt='profile'/>
            <div className='about-me-detail-container'>
                <p>
                    <span className='about-highlight'>I am a developer who enjoys working in front-end development but also gets a kick out of back-end development. </span>
                </p>
                <p>
                    I’m naturally inquisitive and enjoy figuring out how things work. I have a defined sense of aesthetic and enjoy making thoughtful, engaging, and functional web applications that have a simple, clean and distinct design.
                </p>
                <p>
                    I have experience with various technologies, and I am currently specializing in <span className='about-highlight'>JavaScript</span> and <span className='about-highlight'>ReactJS. </span>
                    I have designed, developed and deployed web applications using multiple modern tools and frameworks such as ReactJs, Expressjs, Bootstrap, Sass ..etc... 
                </p>
                <p>
                    When I'm not coding, I enjoy playing piano or hanging out with my friends and family.
                </p>
            </div>
        </div>
    )
}

export default AboutMe