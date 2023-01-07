import React from 'react';
import NbkLogo from '../img/crystal.webp';
import NbkLogoPng from '../img/crystal.png';
import './NBK.css';

const NBK = () => {

    const siteLink = 'https://tianamariah.github.io/NBK/';
    const siteTarget = '_blank';


    return (
        <div className='body nbk'>
            <div className='left-side'>
                <div className='insert-quote center-text'><h1>THE  <span className='black'>NAIL</span> BAR</h1></div>
                <div className='middle-content'>
                    <div></div>
                    <div className='content-body center-text'>
                        <div>
                            <div>
                                <picture>
                                    <source type="webp/png" srcset={NbkLogo} />
                                    <img src={NbkLogoPng} className='spin-y' alt='The Nail Bar Logo' width='80' />
                                </picture>
                            </div>
                                    <h1>The Nail Bar</h1>
                                    <h3>Project Specifications:</h3>
                                    <p>A one page site to showcase The Nail Bar, a nail salon located in Worcester, MA created by Independent Nail Artist K.C.<br></br></p>
                                    <p>Built with <strong>HTML</strong>, <strong>CSS</strong> + <strong>JavaScript</strong>.</p>
                                    <div className='hp-btn-group center-text'>
                                        <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='insert-quote center-text'><h1><span className='black'>THE</span>  NAIL <span className='black'>BAR</span></h1></div>
                </div>
                <div className='right-side'>
                    <div></div>
                    <div className='website-title'>
                        <div></div>
                        <div className='center-text'>
                            <div>
                                <a href={siteLink} target={siteTarget}><h1>NBK</h1></a>
                                <a href={siteLink} target={siteTarget}><p>The Nail Bar</p></a>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
            )
};

            export default NBK;