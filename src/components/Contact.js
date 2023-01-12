import React from 'react';
import './Contact.css';


const Contact = () => {

    const email = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vintagetee28@gmail.com';
    const emailTarget = "_blank";
    const donationLink = "https://www.buymeacoffee.com/vintagetee28?new=1";

    return (
        <>
            <div className='main'>
                <div id='showDesktopSection' className='body contact'>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">contact_mail</span>
                                <h1>Need a Website?</h1>
                                <h3>Let's Connect!</h3>
                                <p>I am available and best reached via email.</p>
                                <div className='hp-btn-group'>
                                    <div className="btn-grid">
                                        <div><a href={email} target={emailTarget}><button>Email Me</button></a></div>
                                        <div><a href={donationLink} target={emailTarget}><button>Buy Me A Coffee</button></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='left-side center-text'>
                        <div className='website-title'>
                            <div className='center-text'>
                                <div>
                                    <a href={email} target={emailTarget}><h1>Contact</h1></a>
                                    <a href={email} target={emailTarget}><p>Let's Connect</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='showMobileSection' className='body contact'>
                    <div className='left-side center-text'>
                        <div className='website-title'>
                            <div className='center-text'>
                                <div>
                                    <a href={email} target={emailTarget}><h1>Contact</h1></a>
                                    <a href={email} target={emailTarget}><p>Let's Connect</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-side center-text'>
                        <div className='content-body'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">contact_mail</span>
                                <h1>Need a Website?</h1>
                                <h3>Let's Connect!</h3>
                                <p>I am available and best reached via email.</p>
                                <div className='hp-btn-group'>
                                    <div className="btn-grid">
                                        <div><a href={email} target={emailTarget}><button>Email Me</button></a></div>
                                        <div><a href={donationLink} target={emailTarget}><button>Buy Me A Coffee</button></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;