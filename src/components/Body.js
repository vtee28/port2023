import React, { useState } from 'react';
import './Body.css';
import Menu from './Menu';
import THL from './THL';
import NBK from './NBK';
import Frugal from './Frugal';
import Port2023 from './Port2023';
import Contact from './Contact';
import Fade from 'react-reveal/Fade';
import Flower from '../img/flower.png';
import Jello from 'react-reveal/Jello';


const Body = (props) => {

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
    const main = document.getElementsByClassName('main');

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
        main[0].style.display = "none";
    }

    if (toogleMenuClose) {
        menuBar.style.display = "grid";
        menuGrid.style.display = "none";
        menuCloseIcon.style.visibility = "hidden";
        main[0].style.display = "block";
    }

    if (firstState === 1) {

        return (
            <>

            <Menu onMenuOpen={openMenuHandler} onMenuClose={closeMenuHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} onSeventhState={seventhStateHandler} />

            <div className='main'>
                <div className='body'>

                    <div className='left-side center-text'>
                        <div className='center-text'>
                            <div className='content-quote website-title'>
                               <Jello forever><img className='glitch-about flowerImg'src={Flower} alt='flower illustration'/></Jello>
                                <p>Freelance Front End Developer</p>
                                <p>Make Something Beautiful Everyday</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <h1>Hello, I'm Tiana ✨</h1>
                                <p>
                                    I design and build websites with a focus on accessibility using: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, and <strong>Illustrator</strong>.
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


                <Fade>
                    <THL />
                </Fade>
                <Fade>
                    <NBK />
                </Fade>
                <Fade>
                    <Frugal />
                </Fade>
                <Fade>
                    <Port2023 />
                </Fade>
                <Fade>
                    <Contact />
                </Fade>
         
                </div>
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