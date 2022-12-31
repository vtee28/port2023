import React from 'react';
import './Body.css';



const THL = (props) => {

    const siteLink = '#';
    const siteTarget = '_blank';
    const oldSiteLink = 'https://tianamariah.github.io/LOMI/';

        return (
            <>
            <div className='body'>
                <div className='left-side'>
                    <div><h1>THL</h1></div>
                </div>
                <div className='right-side'>
                    <div className='inner-grid'>
                        <div>&nbsp;</div>
                        <div className='middle-section'>
                            <h1>The Herbert Lab</h1>
                            <h2>Project Specifications:</h2>
                            <p>An eighteen page informational site revamp to showcase Dr. Herbert’s Mucosal Immunology Science Lab in a professional + modern light.</p>
                            <h2>Website Built With:</h2>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Vanilla JavaScript</p>

                            <div className='center-text'>
                                <a href={siteLink} target={siteTarget}>Visit Site</a>
                            </div>
                            <div className='center-text'>
                            <a href={oldSiteLink} target={siteTarget}>Visit Older Verison</a>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                </div>
            </div>
            </>

        )
    }

export default THL;