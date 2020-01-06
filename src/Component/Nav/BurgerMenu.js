import React, {useState} from 'react';
import './BurgerMenu.css';


const BurgerMenu = ({handleToggle,isToggled})=>{
    
    return(
        <div onClick={handleToggle} className={isToggled ? 'burger-menu toggle':'burger-menu'}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    )
}

export default BurgerMenu;