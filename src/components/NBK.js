import React from 'react';
import './Body.css';

const NBK = () => {

    const siteLink = 'http://thenailbarbykc.com/';
    const siteTarget = '_blank';


    return (
        <div className='body'>
            <div className='left-side'>
                <div><h1>NBK</h1></div>
            </div>
            <div className='right-side'>
                <div className='inner-grid'>
                    <div>&nbsp;</div>
                    <div className='middle-section'>
                        <h1>The Nail Bar by K.C.</h1>
                        <h2>Project Specifications:</h2>
                        <p>A one page site to showcase The Nail Bar, a nail salon located in Worcester, MA created by Independent Nail Artist K.C.</p>
                        <h2>Website Built With:</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Vanilla JavaScript</p>

                        <div className='center-text'>
                            <a href={siteLink} target={siteTarget}>Visit Site</a>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    )
};

export default NBK;