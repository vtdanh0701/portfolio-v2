import React from 'react';
import './ProjectCard.css';




const ProjectCard = ({image,title}) =>{
    return(
        <div className='project-card'>
            <div className='img-box'>
                <img src={image}/>
            </div>
            <div className='detail'>
                <div className='content'>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;