import React from 'react';
import './LoadingPage.css'

const LoadingPage = ()=>{
    return(
        <div className='loading-page'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingPage;