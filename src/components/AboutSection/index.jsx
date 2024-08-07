import React from 'react';
import Image from 'next/image';
import about from '../../images/about.png';
import './index.css';

function AboutSection() {

    return (
        <section className='about' id='about'>
            <div className='about-img'>
                <Image
                    className='img'
                    src={about}
                    alt='About image'
                />
            </div>
            <div className='about-content'>
                <h2 className='heading'>About <span>Me</span></h2>
                <h3>Hi, I'm Here To Help Your Next Project!</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi temporibus amet labore sit, ex laborum sequi inventore quis vel illum quisquam itaque ab enim perspiciatis culpa esse fugit, aliquam praesentium accusamus doloribus nostrum id et. Expedita, similique? Corporis, debitis.</p>

                <a href='/' className='btn'>Read More</a>
            </div>
        </section>
    )
}

export default AboutSection;