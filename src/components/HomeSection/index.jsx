import React from 'react';
import home from '../../images/home.png';
import Image from 'next/image';
import './index.css';

function HomeSection() {
    return (
        <section className='home' id='home'>
            <div className='home-content'>
                <h3>Hello, I am</h3>
                <h1>Danish Shah</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos in autem dicta? Quam eos nulla aliquam dolore?</p>

                <div className='social-media'>
                    <a href='#'><i className='bx bxl-facebook'></i></a>
                    <a href='#'><i className='bx bxl-twitter'></i></a>
                    <a href='#'><i className='bx bxl-instagram-alt'></i></a>
                    <a href='#'><i className='bx bxl-linkedin'></i></a>
                </div>

                <a href='/' className='btn'>Download CV</a>
            </div>

            <div className="profession-container">
                <div className="profession-box">
                    <div className="profession" style={{ '--i': 0 }}>
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Developer</h3>
                    </div>
                    <div className="profession" style={{ '--i': 1 }}>
                        <i className='bx bx-code-alt'></i>
                        <h3>Video Gamer</h3>
                    </div>
                    <div className="profession" style={{ '--i': 2 }}>
                        <i className='bx bx-palette'></i>
                        <h3>Web Designer</h3>
                    </div>
                    <div className="profession" style={{ '--i': 3 }}>
                        <i className='bx bx-video-recording'></i>
                        <h3>Videographer</h3>
                    </div>

                    <div className="circle"></div>

                </div>

                <div className="overlay"></div>

                <div className="home-img">
                    <Image
                        className='img'
                        src={home}
                        alt='Home image'
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>

        </section>
    )
}

export default HomeSection;