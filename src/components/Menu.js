import React, { useState } from 'react';
import './Menu.css';
import About from '../img/about.webp';
import AboutPng from '../img/about.png';

const Menu = (props) => {
    /* Hover on Menu Grid */
    const menuIcons = document.getElementsByClassName('menu-item-icon');
    const mobileTitles = document.getElementsByClassName('mobile-menu-title');
    const navigateIcons = document.getElementsByClassName('navigate-icon');


    const [hovered, setHovered] = useState(false);

    const startdiv1Handler = () => {
        setHovered(true);
        menuIcons[0].classList.add('spin-y-menu');
        menuIcons[0].style.color = '#000';
        mobileTitles[0].style.color = '#000';
        navigateIcons[0].style.color = '#000';
    }

    const stopdiv1Handler = () => {
        setHovered(false);
        menuIcons[0].classList.remove('spin-y-menu');
        menuIcons[0].style.color = 'rgb(230, 150, 119)';
        mobileTitles[0].style.color = 'rgb(230, 150, 119)';
        navigateIcons[0].style.color = 'rgb(230, 150, 119)';
    }

    const startdiv2Handler = () => {
        setHovered(true);
        menuIcons[1].classList.add('spin-y-menu');
        menuIcons[1].style.color = '#000';
        mobileTitles[1].style.color = '#000';
        navigateIcons[1].style.color = '#000';
    }

    const stopdiv2Handler = () => {
        setHovered(false);
        menuIcons[1].classList.remove('spin-y-menu');
        menuIcons[1].style.color = 'rgb(152, 180, 232)';
        mobileTitles[1].style.color = 'rgb(152, 180, 232)';
        navigateIcons[1].style.color = 'rgb(152, 180, 232)';
    }

    const startdiv3Handler = () => {
        setHovered(true);
        menuIcons[2].classList.add('spin-y-menu');
        menuIcons[2].style.color = '#000';
        mobileTitles[2].style.color = '#000';
        navigateIcons[2].style.color = '#000';
    }

    const stopdiv3Handler = () => {
        setHovered(false);
        menuIcons[2].classList.remove('spin-y-menu');
        menuIcons[2].style.color = 'rgb(192, 210, 167)';
        mobileTitles[2].style.color = 'rgb(192, 210, 167)';
        navigateIcons[2].style.color = 'rgb(192, 210, 167)';

    }

    const startdiv4Handler = () => {
        setHovered(true);
        menuIcons[3].classList.add('spin-y-menu');
        menuIcons[3].style.color = '#000';
        mobileTitles[3].style.color = '#000';
        navigateIcons[3].style.color = '#000';
    }

    const stopdiv4Handler = () => {
        setHovered(false);
        menuIcons[3].classList.remove('spin-y-menu');
        menuIcons[3].style.color = 'rgb(224, 205, 179)';
        mobileTitles[3].style.color = 'rgb(224, 205, 179)';
        navigateIcons[3].style.color = 'rgb(224, 205, 179)';
    }

    const startdiv5Handler = () => {
        setHovered(true);
        menuIcons[4].classList.add('spin-y-menu');
        menuIcons[4].style.color = '#000';
        mobileTitles[4].style.color = '#000';
        navigateIcons[4].style.color = '#000';
    }

    const stopdiv5Handler = () => {
        setHovered(false);
        menuIcons[4].classList.remove('spin-y-menu');
        menuIcons[4].style.color = 'rgb(238,191,116)';
        mobileTitles[4].style.color = 'rgb(238,191,116)';
        navigateIcons[4].style.color = 'rgb(238,191,116)';
    }

    const startdiv6Handler = () => {
        setHovered(true);
        menuIcons[5].classList.add('spin-y-menu');
        menuIcons[5].style.color = '#000';
        mobileTitles[5].style.color = '#000';
        navigateIcons[5].style.color = '#000';
    }

    const stopdiv6Handler = () => {
        setHovered(false);
        menuIcons[5].classList.remove('spin-y-menu');
        menuIcons[5].style.color = 'rgb(200, 173, 232)';
        mobileTitles[5].style.color = 'rgb(200, 173, 232)';
        navigateIcons[5].style.color = 'rgb(200, 173, 232)';
    }


    return (
        <>
            <div className='collapsible-menu' id='menu-bar' onClick={props.onMenuOpen}>
                <div></div>
                <div className='inner-collapsible-grid'>
                    <div></div>
                    <div className='center-text menu-text-box' id="menu-box"><span className='menu-text' id='menu-icon'><div id="rotateText"><span className="material-symbols-rounded main-menu-icon">expand_more</span></div></span></div>
                    <div></div>
                </div>
                <div></div>
            </div>

            <div className='menu-grid' id="menuGrid">
                <div className='center-text menuDiv menuDiv1 menuDiv1-mobile' onClick={props.onSecondState} onMouseOver={startdiv1Handler} onMouseOut={stopdiv1Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">home</span></div>
                            <div><h1 className='mobile-menu-title'>HOME</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv2 menuDiv2-mobile' onClick={props.onThirdState} onMouseOver={startdiv2Handler} onMouseOut={stopdiv2Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">web</span></div>
                            <div><h1 className='mobile-menu-title'>The Herbert Lab</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv3 menuDiv3-mobile' onClick={props.onFourthState} onMouseOver={startdiv3Handler} onMouseOut={stopdiv3Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">web</span></div>
                            <div><h1 className='mobile-menu-title'>The Nail Bar</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv4 menuDiv4-mobile' onClick={props.onFifthState} onMouseOver={startdiv4Handler} onMouseOut={stopdiv4Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">web</span></div>
                            <div><h1 className='mobile-menu-title'>FRUGAL</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv5 menuDiv5-mobile' onClick={props.onSixthState} onMouseOver={startdiv5Handler} onMouseOut={stopdiv5Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">web</span></div>
                            <div><h1 className='mobile-menu-title'>Portfolio 2023</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
                <div className='center-text menuDiv menuDiv6 menuDiv6-mobile' onClick={props.onSeventhState} onMouseOver={startdiv6Handler} onMouseOut={stopdiv6Handler}>
                    <div className='innerMenuGrid center-text'>
                        <div className='mobileMenuGrid'>
                            <div><span className="material-symbols-rounded menu-item-icon mobile-menu-icon">contact_mail</span></div>
                            <div><h1 className='mobile-menu-title'>CONTACT</h1></div>
                            <span className="material-symbols-rounded mobile-menu-add-icon">add_circle</span>
                            <div className='navigate'><span className="material-symbols-rounded mobile-menu-icon navigate-icon">navigate_next</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <span id='menu-icon-close' onClick={props.onMenuClose}> X </span>
        </>
    )
};

export default Menu;