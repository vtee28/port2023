import React, { useState } from 'react';
import './Menu.css';

const Menu = (props) => {
    
    return (
        <>
            <div className='collapseable-menu' id='menu-bar' onClick={props.onMenuOpen}>
                <div className="hideOnToggle"></div>
                <div className='center-text menu-arrow-box' id="menu-box"><span className='menu-arrow' id='menu-icon'> > </span></div>
                <div className="hideOnToggle"></div>
            </div>

            <div className='menu-grid' id="menuGrid">
                <div className='center-text menuDiv1' onClick={props.onSecondState}><h1>HOME</h1></div>
                <div className='center-text menuDiv2' onClick={props.onThirdState}><h1>The Herbert Lab</h1></div>
                <div className='center-text menuDiv3' onClick={props.onFourthState}><h1>The Nail Bar</h1></div>
                <div className='center-text menuDiv4' onClick={props.onFifthState}><h1>FRUGAL</h1></div>
                <div className='center-text menuDiv5' onClick={props.onSixthState}><h1>Portfolio 2023</h1></div>
                <div className='center-text menuDiv6' onClick={props.onSeventhState}><h1>CONTACT</h1></div>
            </div>

            <span className='menu-arrow' id='menu-icon-close' onClick={props.onMenuClose}> X </span>

        </>
    )
};

export default Menu;