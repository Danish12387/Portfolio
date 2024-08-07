import React from 'react';
import './index.css';

function ServicesSection() {
  return (
    <section className='services' id='services'>
        <h2 className='heading'>
            My <span>Services</span>
        </h2>

        <div className='services-container'>
            <div className='services-box'>
                <i className='bx bx-code-alt'/>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sapiente libero. Nihil totam laborum debitis neque architecto aspernatur, expedita quia minus at.</p>
                <a href='/' className='btn'>Read More</a>
            </div>

            <div className='services-box'>
                <i className='bx bxs-paint'/>
                <h3>Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sapiente libero. Nihil totam laborum debitis neque architecto aspernatur, expedita quia minus at.</p>
                <a href='/' className='btn'>Read More</a>
            </div>

            <div className='services-box'>
                <i className='bx bx-bar-chart-alt'/>
                <h3>Graphic Designing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sapiente libero. Nihil totam laborum debitis neque architecto aspernatur, expedita quia minus at.</p>
                <a href='/' className='btn'>Read More</a>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection;