import React, { useState } from 'react';
import './Landing.css';
import Clouds from '../img/clouds.png';
import CloudsMobile from '../img/clouds-mobile.png';
import Rainbow from '../img/rainbow.png';
import RainbowMobile from '../img/rainbow-mobile.png';
import Landscape from '../img/landscape.png';
import LandscapeMobile from '../img/landscape-mobile.png';
import ButterflyOne from '../img/butterfly-1.png';
import ButterflyTwo from '../img/butterfly-2.png';
import ButterflyThree from '../img/butterfly-3.png';
import ButterflyFour from '../img/butterfly-4.png';


function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
}


const Landing = (props) => {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    

      React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }, 1000)
    
        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        
    }
      })

    const w = window.innerWidth;
    let cloudsImage = Clouds;
    let landscapeImage = Landscape;
    let rainbowImage = Rainbow;


    if (w <= 500) {
        cloudsImage = CloudsMobile;
        landscapeImage = LandscapeMobile;
        rainbowImage = RainbowMobile;

    } else {
        cloudsImage = Clouds;
        landscapeImage = Landscape;
        rainbowImage = Rainbow;
    }


    return (
        <div className='landing-page-body'>
            <div className='main-grid'>
                <div className='row-1'>
                    <div className='img-box-one'>
                        <img className='clouds' src={cloudsImage} alt="" />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='animation-grid'>
                        <div className='img-box-1'>
                            <div className='butterfly-1'>
                                <img className='bf-1' src={ButterflyOne} alt=""  />
                                <span className='emoji'>✨</span>
                            </div>
                        </div>
                        <div className='img-box-2'>
                            <div className='butterfly-2'>
                                <img className='bf-2' src={ButterflyTwo} alt=""  />
                                <span className='emoji'>✨</span>
                            </div>
                        </div>
                        <div className='img-box-2'>
                            <div className='butterfly-2'>
                                <img className='bf-2' src={ButterflyFour} alt=""  />
                                <span className='emoji'>✨</span>
                            </div>
                        </div>
                        <div className='img-box-1'>
                            <div className='butterfly-1'>
                                <img className='bf-1' src={ButterflyThree} alt=""  />
                                <span className='emoji'>✨</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-3'>
                    <div className='landing-page-btn center-text'>
                        <button onClick={props.onSecondState} aria-label="Click here  to view my recent work" >Share My World</button>
                    </div>
                </div>
                <div className='row-4'>
                    <div className='img-box-two'>
                        <img className='rainbow' src={rainbowImage} alt="" />
                    </div>
                </div>
                <div className='row-5'>
                    <div className='img-box-three'>
                        <img className='landscape' src={landscapeImage} alt=""  />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;