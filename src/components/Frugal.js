import React from 'react';
import './Frugal.css';

const Frugal = () => {

    const siteLink = 'https://vintagetee28.substack.com/';
    const siteTarget = '_blank';

    return (
        <>
            <div className='main'>
                <div id="showDesktopSection" className='body frugal'>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">styler</span>
                                <h1>Frugal</h1>
                                <h3>Project Specifications:</h3>
                                <p>A newsletter curated for those who make it their mission to stay frugally stylish.</p>
                                <p>Design Elements + Newsletter Graphics Created With: <strong>Adobe Illustrator</strong>.</p>
                                <div className='hp-btn-group center-text'>
                                    <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='left-side center-text'>
                        <div className='website-title'>
                            <div className='center-text'>
                                <div>
                                    <a href={siteLink} target={siteTarget}><h1>FRUGAL</h1></a>
                                    <a href={siteLink} target={siteTarget}><p>A Substack Newsletter</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='showMobileSection' className='body frugal'>
                    <div className='left-side center-text'>
                        <div className='website-title'>
                            <div className='center-text'>
                                <div>
                                    <a href={siteLink} target={siteTarget}><h1>FRUGAL</h1></a>
                                    <a href={siteLink} target={siteTarget}><p>A Substack Newsletter</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">styler</span>
                                <h1>Frugal</h1>
                                <h3>Project Specifications:</h3>
                                <p>A newsletter curated for those who make it their mission to stay frugally stylish.</p>
                                <p>Design Elements + Newsletter Graphics Created With: <strong>Adobe Illustrator</strong>.</p>
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

export default Frugal;
