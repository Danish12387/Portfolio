import React from 'react'
import Image from 'next/image';
import Portfolio1 from '../../images/portfolio1.jpg';
import Portfolio2 from '../../images/portfolio2.jpg';
import Portfolio3 from '../../images/portfolio3.jpg';
import Portfolio4 from '../../images/portfolio4.jpg';
import Portfolio5 from '../../images/portfolio5.jpg';
import Portfolio6 from '../../images/portfolio6.jpg';
import './index.css';

function PortfolioSection() {
    return (
        <section className='portfolio' id='portfolio'>
            <h2 className='heading'>Latest <span>Project</span></h2>
            <div className='portfolio-container'>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio1}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio2}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio3}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio4}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio5}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className='portfolio-box'>
                    <Image
                        className='img'
                        src={Portfolio6}
                        alt='Portfolio1 image'
                    />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, saepe reiciendis!</p>
                        <a href='/'><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;