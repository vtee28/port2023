import React from 'react';
import './Body.css';


const Buttons = (props) => {

    const email = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vintagetee28@gmail.com';
    const emailTarget = "_blank";

    return (
        <div className='center-text'>
            <button onClick={props.onFirstState}>Home</button>
            <button onClick={props.onSecondState}>The Herbert Lab</button>
            <button onClick={props.onThirdState}>Nails By K.C.</button>
            <button onClick={props.onFourthState}>Frugal</button>
            <button onClick={props.onFifthState}>Portfolio 2023</button>
            <a href={email} target={emailTarget}><button>Let's Connect</button></a>
        </div>
    )
};

export default Buttons;