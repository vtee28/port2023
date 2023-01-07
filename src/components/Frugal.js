import React from 'react';
import './Frugal.css';

const Frugal = () => {

    const siteLink = 'https://vintagetee28.substack.com/';
    const siteTarget = '_blank';

    return (
        <>
            <div className='body frugal'>
                <div className='left-side'>
                    <div className='insert-quote center-text'><h1>FRU<span className='black'>GAL</span></h1></div>
                    <div className='middle-content'>
                        <div></div>
                        <div className='content-body center-text'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-diamond" width="80" height="80">styler</span>
                                <h1>Frugal</h1>
                                <h3>Project Specifications:</h3>
                                <p>A newsletter curated for those who make it their mission to stay frugally stylish.<br></br><br></br><br></br></p>
                                <p>Design Elements + Newsletter Graphics Created With: <strong>Adobe Illustrator</strong>.</p>
                                <div className='hp-btn-group center-text'>
                                    <a href={siteLink} target={siteTarget}><button>Visit Site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='insert-quote center-text'><h1><span className='black'>FRU</span>GAL</h1></div>
                </div>
                <div className='right-side'>
                    <div></div>
                    <div className='website-title'>
                        <div></div>
                        <div className='center-text'>
                            <div>
                                <a href={siteLink} target={siteTarget}><h1>FRUGAL</h1></a>
                                <a href={siteLink} target={siteTarget}><p>A Substack Newsletter</p></a>
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

export default Frugal;
