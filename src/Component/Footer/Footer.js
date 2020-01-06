import React from 'react';
import './Footer.css'
import {Link} from 'react-scroll';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-email-container'>
                <span>CONTACT</span>
                <div className='contact-email'>
                    <span>Email:</span> vtdanh0701@gmail.com
                </div>
            </div>
             
            <div className='footer-social'>
                <div><a href='https://www.linkedin.com/in/danh-vuong/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></div>
                <div><a href='https://github.com/vtdanh0701' target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
            </div>
            
        </div>
    )
}

export default Footer;