import React from 'react';
import LoadingPage from '../Page/LoadingPage';
import UpdatedComponent from '../Component/withLoading';
import Header from '../Component/Header/Header';
import Project from '../Component/Project/Project';
import Footer from '../Component/Footer/Footer';


const HomePage = ({isLoading}) => {
   
    return(
        <>
            {isLoading ? <LoadingPage/> : 
                <div className='home-page'>
                    <Header/>
                    <Project/>
                    <Footer/>
                </div>
            }
        </>
    )
}

export default UpdatedComponent(HomePage);