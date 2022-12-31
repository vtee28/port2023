import React, { useState } from 'react';
import './Body.css';
import THL from './THL';
import NBK from './NBK';
import Frugal from './Frugal';
import Port2023 from './Port2023';
import Buttons from './Buttons';
import ButterflyOne from '../img/butterfly-1.png';
import ButterflyTwo from '../img/butterfly-2-2.png';
import ButterflyThree from '../img/butterfly-3.png';
import ButterflyFour from '../img/butterfly-4.png';


const Body = (props) => {
    const [firstState, setFirstState] = useState(0);


    const firstStateHandler = () => {
        setFirstState(0);
    }

    const secondStateHandler = () => {
        setFirstState(1);
    }

    const thirdStateHandler = () => {
        setFirstState(2);
    }

    const fourthStateHandler = () => {
        setFirstState(3);
    }

    const fifthStateHandler = () => {
        setFirstState(4);
    }

    const hpImages = document.getElementsByClassName('bgImages');
    console.log(hpImages);


    //if state = 0 show Body
    if (firstState === 0) {
        return (
            <body className='body'>
                <div className='left-side'>
                <div className='middle-section' >
                    <div className='animation-grid animation-grid-two'>
                            <div className='img-box-1'>
                                <div className='butterfly-1'>
                                    <img className='bf-1' src={ButterflyOne} />
                                </div>
                            </div>
                            <div className='img-box-2'>
                                <div className='butterfly-2'>
                                    <img className='bf-2' src={ButterflyTwo} />
                                </div>
                            </div>
                            <div className='img-box-3'>
                                <div className='butterfly-3'>
                                    <img className='bf-3' src={ButterflyThree} />
                                </div>
                            </div>
                        </div>
                        <div className="center-text first-child"><h1>Hello, World!</h1></div>
                        <div className="center-text hp-p">
                            <div>
                                <p><span className="emoji">🙋🏽‍♀️</span>&nbsp;&nbsp;I’m Tiana M.</p>
                                <p><span className="emoji">👩🏽‍💻</span>&nbsp;&nbsp;I design + build websites using:</p>
                                <p><span className="emoji">💡</span>&nbsp;&nbsp;HTML + CSS + JavaScript + React.js </p>
                                <p><span className="emoji">👀</span>&nbsp;&nbsp;Looking to join a creative agency. </p>
                            </div>
                        </div>
                        <div className='center-text hp-btn-group'>
                            <button onClick={secondStateHandler}>View Work</button>
                            <button onClick={secondStateHandler}>Email Me</button>
                        </div>
                    </div>
                </div>
                <div className='right-side'>
                <div className='bg-img'>
                        <div className='animation-grid'>
                            <div className='img-box-1'>
                                <div className='butterfly-1'>
                                    <img className='bf-1' src={ButterflyOne} />
                                </div>
                            </div>
                            <div className='img-box-2'>
                                <div className='butterfly-2'>
                                    <img className='bf-2' src={ButterflyTwo} />
                                </div>
                            </div>
                            <div className='img-box-3'>
                                <div className='butterfly-3'>
                                    <img className='bf-3' src={ButterflyThree} />
                                </div>
                            </div>
                            <div className='img-box-4'>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

    //if state = 1 show THL
    else if (firstState === 1) {
        return (
            <>
                <THL />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} />
            </>
        )
    }

    else if (firstState === 2) {
        return (
            <>
                <NBK />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} />
            </>
        )
    }

    else if (firstState === 3) {
        return (
            <>
                <Frugal />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} />
            </>
        )
    }

    else if (firstState === 4) {
        return (
            <>
                <Port2023 />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} />
            </>
        )
    }


}

export default Body;