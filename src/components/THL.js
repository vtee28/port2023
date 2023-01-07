import React from 'react';
import Buttons from './Contact';
import ThlLogo from '../img/logo-2-b.svg';
import './THL.css';



const THL = () => {

    const siteLink = 'https://tianamariah.github.io/THL/';
    const siteTarget = '_blank';
    const oldSiteLink = 'https://tianamariah.github.io/LOMI/';

    return (
        <>
            <div className='body thl'>
                <div className='left-side'>
                    <div className='insert-quote center-text'><h1>THE  <span className='black'>HERBERT</span> LABORATORY</h1></div>
                    <div className='middle-content'>
                        <div></div>
                        <div className='content-body center-text'>
                            <div>
                                <img src={ThlLogo} className="spin" alt="Atom The Herbert Lab Logo" width="80" height="80" />
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

                    <div className='insert-quote center-text'><h1><span className='black'>THE</span>  HERBERT <span className='black'>LABORATORY</span></h1></div>
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