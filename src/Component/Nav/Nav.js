import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

const Nav = () =>{
    return (
        <div className='nav-bar'>
            <div className='logo'>
                <div className='border'></div>
                <span>DV.</span>
            </div>
            <div className='link-container'>
                <NavLink to='/' exact activeClassName='active-link'>Home</NavLink>
                <NavLink to='/about' exact activeClassName='active-link'>About</NavLink>
            </div>
        </div>
    )
   
}

export default Nav;