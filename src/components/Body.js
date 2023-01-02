import React, { useState } from 'react';
import './Body.css';
import Landing from './Landing';
import THL from './THL';
import NBK from './NBK';
import Frugal from './Frugal';
import Port2023 from './Port2023';
import Buttons from './Buttons';



const Body = (props) => {
    const email = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vintagetee28@gmail.com';
    const emailTarget = "_blank";

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

    const sixthStateHandler = () => {
        setFirstState(5);
    }

    //if state = 0 show Body
    if (firstState === 0) {
        return (
            <>
                <Landing onSecondState={secondStateHandler} />
            </>
        )
    }

    else if (firstState === 1) {
        return (
            <>
            <div className='body'>
                <div className='left-side'>
                    <div className='middle-section'>
                        <div className="center-text first-child"><h1>Hello, World!</h1></div>
                        <div className="center-text hp-p">
                            <div>
                                <p><span className="emoji">👩🏽‍💻</span></p>
                                <p>I'm Tiana. I design and build websites with a focus on accessibility using HTML, CSS, Vanilla JavaScript, Illustrator, and React.js. Currently looking to join a creative agency where I can contribute to designs and websites.</p>
                            </div>
                        </div>
                        <div className='center-text hp-btn-group'>
                            <button onClick={thirdStateHandler}>View Work</button>
                            <a href={email} target={emailTarget}><button>Email Me</button></a>
                        </div>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='center-text'>
                        <h1>Make Something Beautiful Everyday</h1>
                    </div>
                </div>
            </div>
            </>
        )
    }


    else if (firstState === 2) {
        return (
            <>
                <THL />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} />
            </>
        )
    }

    else if (firstState === 3) {
        return (
            <>
                <NBK />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} />
            </>
        )
    }

    else if (firstState === 4) {
        return (
            <>
                <Frugal />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} />
            </>
        )
    }

    else if (firstState === 5) {
        return (
            <>
                <Port2023 />
                <Buttons onFirstState={firstStateHandler} onSecondState={secondStateHandler} onThirdState={thirdStateHandler} onFourthState={fourthStateHandler} onFifthState={fifthStateHandler} onSixthState={sixthStateHandler} />
            </>
        )
    }


}

export default Body;