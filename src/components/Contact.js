import React from 'react';
import './Contact.css';


const Contact = () => {

    const email = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vintagetee28@gmail.com';
    const emailTarget = "_blank";
    const donationLink = "https://www.buymeacoffee.com/vintagetee28?new=1";

    return (
        <>
            <div className='body contact'>
                <div className='left-side'>
                    <div className='insert-quote center-text'><h1>Let's <span className='black'> Connect</span></h1></div>
                    <div className='middle-content'>
                        <div></div>
                        <div className='content-body center-text'>
                            <div>
                                <span className="material-symbols-rounded menu-item-icon mobile-menu-icon spin-y">contact_mail</span>
                                <h1>Need a Website?</h1>
                                <h3>Let's Connect!</h3>
                                <p>I am available and best reached via email.</p>
                                <div className='hp-btn-group center-text'>
                                    <a href={email} target={emailTarget}><button>Email Me</button></a>
                                    <a href={donationLink} target={emailTarget}><button>Buy Me A Coffee</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='insert-quote center-text'><h1><span className='black'>Let's</span> Connect</h1></div>
                </div>
                <div className='right-side'>
                    <div></div>
                    <div className='website-title'>
                        <div></div>
                        <div className='center-text'>
                            <div>
                                <a href={email} target={emailTarget}><h1>Contact</h1></a>
                                <a href={email} target={emailTarget}><p>Let's Connect</p></a>
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

export default Contact;