import React, {useState,useEffect} from 'react'; 
import './Header.css';
import Typing from 'react-typing-animation';

const Header = ()=>{  
    return(
        <div className='page-header'>
            <div className='header-text'>
                <Typing>
                    <h1>Hi,<Typing.Delay ms={500}/> I'm Dan.</h1><Typing.Delay ms={1000}/>
                    <h1>A Web Developer based in Seattle.</h1>
                </Typing>
            </div>
            <div className='scroll-container'>
                <span>Scroll Down</span>
            </div>
        </div>
    )
}

export default Header;