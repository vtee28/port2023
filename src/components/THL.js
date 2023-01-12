import React from 'react';
import ThlLogo from '../img/logo-2-b.svg';
import './THL.css';





const THL = () => {

    const siteLink = 'https://drherbertlab.org/';
    const siteTarget = '_blank';

    return (
        <>
        <div className='main'>
            <div id='showDesktopSection' className='body thl'>
                <div id="rightSide" className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <img src={ThlLogo} className="spin-y" alt="Atom The Herbert Lab Logo" width="80" height="80" />
                                <h1>The Herbert Lab</h1>
                                <h3>Project Specifications:</h3>
                                <p>An eighteen page informational site revamp to showcase Dr. Herbert’s Mucosal Immunology Science Lab in a professional + modern light.</p>
                                <p>Built with <strong>HTML</strong>, <strong>CSS</strong> + <strong>JavaScript</strong>.</p>
                                <div className='hp-btn-group center-text'>
                                    <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                                </div>
                            </div>
                        </div>
                </div>
                <div id="leftSide" className='left-side center-text'>
                    <div className='website-title'>
                        <div className='center-text'>
                            <div>
                                <a href={siteLink} target={siteTarget}><h1>THL</h1></a>
                                <a href={siteLink} target={siteTarget}><p>The Herbert Lab</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='showMobileSection' className='body thl'>
                <div id="leftSide" className='left-side center-text'>
                    <div className='website-title'>
                        <div className='center-text'>
                            <div>
                                <a href={siteLink} target={siteTarget}><h1>THL</h1></a>
                                <a href={siteLink} target={siteTarget}><p>The Herbert Lab</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rightSide" className='right-side center-text'>
                    <div className='content-body'>
                        <div>
                            <img src={ThlLogo} className="spin-y" alt="Atom The Herbert Lab Logo" width="80" height="80" />
                            <h1>The Herbert Lab</h1>
                            <h3>Project Specifications:</h3>
                            <p>An eighteen page informational site revamp to showcase Dr. Herbert’s Mucosal Immunology Science Lab in a professional + modern light.</p>
                            <p>Built with <strong>HTML</strong>, <strong>CSS</strong> + <strong>JavaScript</strong>.</p>
                            <div className='hp-btn-group center-text'>
                                <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default THL;