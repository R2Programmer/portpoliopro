import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://www.facebook.com/arthur.clores.7'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/r2clores/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/R2Gaming06'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Arthur Clores</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "Php Dev 😎",1000,
                                "React Dev 🌐",1000,
                                "Java Dev 📱",1000,
                                "Back-end Dev 💻",1000,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application or website with back end operations.
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me{" "}
                        </button>
                        <a href ='ArthurCloresCV.pdf' download='ArthurCloresCV.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;