import React from 'react';
import LoadingPage from '../Page/LoadingPage';
import UpdatedComponent from '../Component/withLoading';
import Footer from '../Component/Footer/Footer';
import AboutMe from '../Component/AboutMe/AboutMe';
import './AboutPage.css'



const AboutPage = ({isLoading})=>{
    return(
        <div>
            {isLoading ? <LoadingPage/> : 
                <div className='about-page'>
                    <div className='cover-container'>
                        <span>DANH VUONG</span>
                        <div className='line'></div> 
                        <p>Web Developer</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L80,154.7C160,149,320,139,480,149.3C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                    </div>
                    <AboutMe/>
                    <Footer/>
                </div>}
                
                
        </div>
    )
}

export default UpdatedComponent(AboutPage);