import React from 'react';
import './Body.css';

const Frugal = () => {

    const siteLink = 'https://vintagetee28.substack.com/';
    const siteTarget = '_blank';

    return (
        <div className='body'>
            <div className='left-side'>
                <div><h1>Frugal</h1></div>
            </div>
            <div className='right-side'>
                <div className='inner-grid'>
                    <div>&nbsp;</div>
                    <div className='middle-section'>
                        <h1>Frugal</h1>
                        <h2>Project Specifications:</h2>
                        <p>A newsletter curated for those who make it their mission to stay frugally stylish.</p>
                        <h2>Design Elements + Newsletter Graphics Built With:</h2>
                        <p>Adobe Illustrator</p>

                        <div className='center-text'>
                            <a href={siteLink} target={siteTarget}>Visit Site</a>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default Frugal;