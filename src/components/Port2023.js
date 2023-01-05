import React from 'react';
import './Body.css';

const Port2023 = () => {

    const oldSiteLink = 'https://tianamariah.github.io/PORT2022';
    const siteTarget = '_blank';


    return (
        <>
         <div className='body'>
            <div className='left-side'>
                <div><h1>2023</h1></div>
            </div>
            <div className='right-side'>
                <div className='inner-grid'>
                    <div>&nbsp;</div>
                    <div className='middle-section'>
                        <h1>Portfolio 2023</h1>
                        <h2>Project Specifications:</h2>
                        <p>In the past my portfolio's were created with HTML, CSS and Bootstrap. This year, I wanted to showcase the new skills I learned in 2022.</p>
                        <h2>Website Built With:</h2>
                        <p>React.js</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <div className='center-text'>
                            <a href={oldSiteLink} target={siteTarget}>Visit Older Version</a>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
        
        </>
    )
};

export default Port2023;