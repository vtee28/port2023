import React, { useState, useEffect } from 'react';
import './Body.css';
import Menu from './Menu';
import THL from './THL';
import NBK from './NBK';
import Frugal from './Frugal';
import Port2023 from './Port2023';
import Contact from './Contact';
import About from '../img/about.webp';
import AboutPng from '../img/about.png';
import AboutIcon from '../img/about-icon.png';



const Body = (props) => {

    /* Rerendered on Window Resize */
    useEffect(() => {
        function handleResize() {}
    
        // Attach the event listener to the window object
        window.addEventListener('resize', handleResize);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const email = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vintagetee28@gmail.com';
    const emailTarget = "_blank";

    const [firstState, setFirstState] = useState(1);


    const secondStateHandler = () => {
        setFirstState(1);
        closeMenuHandler();

    }

    const thirdStateHandler = () => {
        setFirstState(2);
        closeMenuHandler();
    }

    const fourthStateHandler = () => {
        setFirstState(3);
        closeMenuHandler();
    }

    const fifthStateHandler = () => {
        setFirstState(4);
        closeMenuHandler();
    }

    const sixthStateHandler = () => {
        setFirstState(5);
        closeMenuHandler();
    }

    const seventhStateHandler = () => {
        setFirstState(6);
        closeMenuHandler();
    }


    /* Toggling Menu */
    const menuBar = document.getElementById('menu-bar');
    const menuGrid = document.getElementById('menuGrid');
    const menuCloseIcon = document.getElementById('menu-icon-close');

    const [toogleMenuOpen, setToogleMenuOpen] = useState(false);

    const openMenuHandler = () => {
        setToogleMenuOpen(true);
        setToggleMenuClose(false);
    }

    const [toogleMenuClose, setToggleMenuClose] = useState(false)

    const closeMenuHandler = () => {
        setToggleMenuClose(true);
        setToogleMenuOpen(false);
    }

    if (toogleMenuOpen) {
        menuBar.style.display = "none";
        menuGrid.style.display = "grid";
        menuCloseIcon.style.visibility = "visible";
    }

    if (toogleMenuClose) {
        menuBar.style.display = "grid";
        menuGrid.style.display = "none";
        menuCloseIcon.style.visibility = "hidden";
    }




    if (firstState === 1) {

        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />

                <div className='body'>

                    <div className='left-side center-text'>

                        <div className='content-quote'>
                            <div className='center-text'>
                                <picture>
                                    <source srcSet={About} />
                                    <img className='about-icon' src={AboutPng} width="200" alt="Hello Logo" />
                                </picture>
                            </div>
                        </div>

                    </div>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <img className="spin-y" src={AboutIcon} width="50" height="50"/>
                                <p>I'm Tiana. 
                                    <br></br>
                                    I design and build websites with a focus on accessibility using:
                                    <br></br><br></br>
                                    <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, and <strong>Illustrator</strong>.
                                </p>
                                <div className='hp-btn-group center-text'>
                                    <div className='btn-grid'>
                                        <div><button onClick={thirdStateHandler}>View Work</button></div>
                                        <div><a href={email} target={emailTarget}><button>Email Me</button></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }


    else if (firstState === 2) {
        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />

                <THL />
            </>
        )
    }

    else if (firstState === 3) {
        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />
                <NBK />
            </>
        )
    }

    else if (firstState === 4) {
        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />
                <Frugal />
            </>
        )
    }

    else if (firstState === 5) {
        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />
                <Port2023 />
            </>
        )
    }

    else if (firstState === 6) {
        return (
            <>
                <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />
                <Contact />
            </>

        )
    }


}

export default Body;