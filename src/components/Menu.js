import React, { useState } from 'react';
import './Menu.css';
import ThlLogo from '../img/logo-2-b.svg';

const Menu = (props) => {
    const menuIcons = document.getElementsByClassName('menu-item-icon');
    const [hovered, setHovered] = useState(false);

    const startdiv1Handler = () => {
        setHovered(true);
        menuIcons[0].classList.add('spin');
    }

    const stopdiv1Handler = () => {
        setHovered(false);
        menuIcons[0].classList.remove('spin');
    }

    const startdiv2Handler = () => {
        setHovered(true);
        menuIcons[1].classList.add('spin');
    }

    const stopdiv2Handler = () => {
        setHovered(false);
        menuIcons[1].classList.remove('spin');
    }

    const startdiv3Handler = () => {
        setHovered(true);
        menuIcons[2].classList.add('spin');
    }

    const stopdiv3Handler = () => {
        setHovered(false);
        menuIcons[2].classList.remove('spin');
    }

    const startdiv4Handler = () => {
        setHovered(true);
        menuIcons[3].classList.add('spin');
    }

    const stopdiv4Handler = () => {
        setHovered(false);
        menuIcons[3].classList.remove('spin');
    }

    const startdiv5Handler = () => {
        setHovered(true);
        menuIcons[4].classList.add('spin');
    }

    const stopdiv5Handler = () => {
        setHovered(false);
        menuIcons[4].classList.remove('spin');
    }

    const startdiv6Handler = () => {
        setHovered(true);
        menuIcons[5].classList.add('spin');
    }

    const stopdiv6Handler = () => {
        setHovered(false);
        menuIcons[5].classList.remove('spin');
    }


    return (
        <>
            <div className='collapsible-menu' id='menu-bar' onClick={props.onMenuOpen}>
                <div></div>
                <div className='inner-collapsible-grid'>
                    <div className="hideOnToggle"></div>
                    <div className='center-text menu-text-box' id="menu-box"><span className='menu-text' id='menu-icon'> <div id="rotateText"><span class="material-symbols-rounded main-menu-icon">expand_more</span></div></span></div>
                    <div className="hideOnToggle"></div>
                </div>
                <div></div>
            </div>

            <div className='menu-grid' id="menuGrid">
                <div className='center-text menuDiv menuDiv1 menuDiv1-mobile' onClick={props.onSecondState} onMouseOver={startdiv1Handler} onMouseOut={stopdiv1Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">home</span></div>
                            <div><h1 className='mobile-menu-title'>HOME</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv2 menuDiv2-mobile' onClick={props.onThirdState} onMouseOver={startdiv2Handler} onMouseOut={stopdiv2Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><img className="menu-item-icon mobile-menu-icon" src={ThlLogo} alt="Atom The Herbert Lab Logo" width="50" height="50" /></div>
                            <div><h1 className='mobile-menu-title'>The Herbert Lab</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv3 menuDiv3-mobile' onClick={props.onFourthState} onMouseOver={startdiv3Handler} onMouseOut={stopdiv3Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><img className="menu-item-icon mobile-menu-icon" src="https://tianamariah.github.io/NBK/img/icons/icons8-a-nail-64.png" alt="The Nail Bar Logo" width="50" height="50" /></div>
                            <div><h1 className='mobile-menu-title'>The Nail Bar</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv4 menuDiv4-mobile' onClick={props.onFifthState} onMouseOver={startdiv4Handler} onMouseOut={stopdiv4Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">styler</span></div>
                            <div><h1 className='mobile-menu-title'>FRUGAL</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv5 menuDiv5-mobile' onClick={props.onSixthState} onMouseOver={startdiv5Handler} onMouseOut={stopdiv5Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">web</span></div>
                            <div><h1 className='mobile-menu-title'>Portfolio 2023</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv6 menuDiv6-mobile' onClick={props.onSeventhState} onMouseOver={startdiv6Handler} onMouseOut={stopdiv6Handler}>
                    <div className='innerMenuGrid'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">contact_mail</span></div>
                            <div><h1 className='mobile-menu-title'>CONTACT</h1></div>
                        </div>
                        <div className='navigate'><span class="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                    </div>
                </div>
            </div>
            <span className='menu-text' id='menu-icon-close' onClick={props.onMenuClose}> X </span>
        </>
    )
};

export default Menu;