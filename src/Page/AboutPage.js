import React from 'react';
import LoadingPage from '../Page/LoadingPage';
import UpdatedComponent from '../Component/withLoading';


const AboutPage = ({isLoading})=>{
    return(
        <div>
            {isLoading ? <LoadingPage/> : <div>Hello About Page</div>}
        </div>
    )
}

export default UpdatedComponent(AboutPage);