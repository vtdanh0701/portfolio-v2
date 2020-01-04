import React from 'react';
import './AboutMe.css'
import profileImg from '../../images/profile.jpg'
const AboutMe = ()=>{
    return(
        <div className='about-me'>
            <span>About Me</span>
            <img src={profileImg}/>
            <p>
                I'm a web developer based in Seattle, WA. 
            </p>
        </div>
    )
}

export default AboutMe