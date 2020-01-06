import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css'
import * as images from '../../images/project_img/index';

const MERN = ['react','mongo','express','node']

const Project = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                PROJECTS
            </div>
            
            <div className='project-card-container'>
                <ProjectCard image={images.project4} 
                             title='Zero Bug'
                             stack='Full-Stack'
                             github='https://github.com/vtdanh0701/Zero-Bug'
                             live='https://zerobug.herokuapp.com/'
                             tech={MERN}
                             />
                <ProjectCard image={images.project2} 
                            title='iCEPI'
                            stack='Full-Stack'
                            github='https://github.com/vtdanh0701/Project3-iCepi'
                            live='https://icepi.herokuapp.com/'
                            tech={MERN}/>
                <ProjectCard image={images.project3} 
                            title='Scalakor'
                            stack='Full-Stack'
                            github='https://github.com/vtdanh0701/GA-Project2-Scalakor'
                            live='https://scalakor.herokuapp.com/'
                            tech={['node','express','postgres']}/>
                <ProjectCard image={images.project1} 
                            title="Space Invader"
                            stack='front-end'
                            github='https://github.com/vtdanh0701/space_invader'
                            live='https://vtdanh0701.github.io/space_invader/'
                            tech={['javascript','html','css']}/>
            </div>
            
        </div>
    )
}

export default Project;