import React from 'react';
import Buttons from './Contact';
import './THL.css';



const THL = (props) => {

    const siteLink = '#';
    const siteTarget = '_blank';
    const oldSiteLink = 'https://tianamariah.github.io/LOMI/';

    return (
        <>
            <div className='body thl'>
                <div className='left-side'>
                    <div></div>
                    <div className='middle-content'>
                        <div></div>
                        <div className='content-body center-text'>
                            <div>
                                <h1>Project Specifications:</h1>
                                <p>An eighteen page informational site revamp to showcase Dr. Herbert’s Mucosal Immunology Science Lab in a professional + modern light. Website was built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>
                                <div className='hp-btn-group center-text'>
                                    <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div className='right-side'>
                    <div></div>
                    <div className='website-title'>
                        <div></div>
                        <div className='center-text'>
                            <div>
                                <a href={siteLink} target={siteTarget}><h1>THL</h1></a>
                                <a href={siteLink} target={siteTarget}><p>The Herbert Lab</p></a>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>

    )
}

export default THL;