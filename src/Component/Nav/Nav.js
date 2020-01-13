import React, {useState,useEffect} from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';
import BurgerMenu from './BurgerMenu'
import Logo from '../../images/nav-logo.png'
import resume from '../../images/resume.pdf'

const Nav = () =>{
    const [scrolled,setScroll] = useState(false);
    const [isToggled, setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(isToggled === false ? true:false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const isTop = window.scrollY < 60;
        if(isTop !== true){
            setScroll(true)
        } else{
            setScroll(false)
        }
        })
        return 
            window.removeEventListener('scroll')
        
    })

    return (
        <div className={scrolled ? 'nav-bar scrolled' : 'nav-bar'}>
            <div className='logo'>
                <NavLink to='/' exact><img src={Logo} alt='DV'/></NavLink>
            </div>
            <div className={isToggled ? 'link-container show':'link-container' }>
                <div className='animation-link'>
                    <NavLink to='/' exact activeClassName='active-link'>Home</NavLink>
                    <NavLink to='/about' exact activeClassName='active-link'>About</NavLink>
                    <a href={resume} target='_blank'>Resume</a>
                </div>
              
            </div>
            <BurgerMenu handleToggle={handleToggle} isToggled={isToggled}/>
        </div>
    )
   
}

export default Nav;
