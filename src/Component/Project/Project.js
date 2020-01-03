import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css'

import * as images from '../../images/project_img/index';

const Project = () => {
    return (
        <div className='project-container'>
            PROJECT
            
            <div className='project-card-container'>
                <ProjectCard image={images.project4} title='Zero Bug'/>
                <ProjectCard image={images.project2} title='Scalakor'/>
                <ProjectCard image={images.project3} title='iCepi'/>
                <ProjectCard image={images.project1} title='Space Shooting'/>

            </div>
        </div>
    )
}

export default Project;