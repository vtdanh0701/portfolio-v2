import React from 'react';
import LoadingPage from '../Page/LoadingPage';
import UpdatedComponent from '../Component/withLoading';


const HomePage = ({isLoading}) => {
   
    return(
        <div className='home-page'>
            {isLoading? <LoadingPage/> : <h1>Hello Home Page</h1>}
        </div>
    )
}

export default UpdatedComponent(HomePage);