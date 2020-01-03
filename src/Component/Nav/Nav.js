import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return (
        <div className='nav-bar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
   
}

export default Nav;