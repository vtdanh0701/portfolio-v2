import React from 'react';
import './ProjectCard.css';

import {
    reactLogo,
    nodeLogo,
    mongoLogo,
    expressLogo,
    jsLogo,
    cssLogo,
    htmlLogo,
    postgrestLogo} from '../../images/tech_logo/index'

let logo = {
    react: reactLogo,
    node: nodeLogo,
    mongo: mongoLogo,
    express: expressLogo,
    postgres: postgrestLogo,
    javascript: jsLogo,
    css: cssLogo,
    html: htmlLogo,
}

const ProjectCard = ({image,title,stack,tech,github,live}) =>{
    
    
    return(
        <div className='project-card'>
            <div className='img-box'>
                <img src={image}/>
            </div>

            <div className='detail'>
                <div className='content'>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='description'>
                        <span>{stack}</span>
                        <div className='tech-container'>
                           {tech && tech.map((e,i) => logo[e] &&
                                                      <div className='logo-container'>
                                                          <img src={logo[e]} key={i}/> 
                                                          <span>{e}</span>       
                                                      </div> )}
                        </div>
                        <div id='link'>
                            <div>
                                <a href={github} target='_blank'><i class="fab fa-github"></i></a>
                                <span>GitHub</span>
                            </div>
                            <div>
                                <a href={live}><i class="fas fa-globe-americas"></i></a>
                                <span>Live Demo</span>
                            </div>
                        </div>
                        
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;