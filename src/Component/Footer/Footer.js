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
                <div><a href='https://www.linkedin.com/in/danh-vuong/' target='_blank'><i class="fab fa-linkedin"></i></a></div>
                <div><a href='https://github.com/vtdanh0701' target='_blank'><i class="fab fa-github"></i></a></div>
            </div>
            <div className='go-up'>
                <Link to='nav-bar'
                    smooth={true}
                    duration={400}><i class="fas fa-angle-double-up"></i></Link>
            </div>
        </div>
    )
}

export default Footer;