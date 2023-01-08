import React from 'react';
import './Port2023.css';

const Port2023 = () => {

    const oldSiteLink = 'https://tianamariah.github.io/PORT2022';
    const siteTarget = '_blank';


    return (
        <>
            <div className='body port'>
                <div className='left-side center-text'>
                    <div className='website-title'>
                        <div className='center-text'>
                            <div>
                                <a href='#' target={siteTarget}><h1>2023</h1></a>
                                <a href='#' target={siteTarget}><p>Portfolio 2023</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side center-text'>
                    <div className='content-body'>
                        <div>
                            <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">styler</span>
                            <h1>Portfolio 2023</h1>
                            <h3>Project Specifications:</h3>
                            <p>In the past, my portfolio's were created with HTML, CSS and Bootstrap.</p>
                            <p>This year, I wanted to showcase the new skills I learned in the past year.</p>
                            <p>Built with <strong>React.js</strong>, <strong>HTML</strong>, <strong>CSS</strong> + <strong>JavaScript</strong>.</p>
                            <div className='hp-btn-group center-text'>
                                <a href={oldSiteLink} target={siteTarget}><button>Visit Previous Portfolio</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Port2023;
