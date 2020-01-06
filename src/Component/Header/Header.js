import React from 'react'; 
import './Header.css';
import Typing from 'react-typing-animation';
import {Link} from 'react-scroll'

const Header = ()=>{  
    return(
        <div className='page-header'>
            
                <Typing className='header-text'>
                    <h1>Hi,<Typing.Delay ms={500}/> I'm Dan.</h1><Typing.Delay ms={1000}/>
                    <h1>A Web Developer based in Seattle.</h1>
                </Typing>
            
            <div className='scroll-container'>
                <Link to='project-container'
                      offset={-45}
                      duration={500} 
                      smooth={true}>
                        <span>Scroll Down</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;