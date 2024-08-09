import React from 'react';
import './index.css';

function ContactSection() {
  return (
    <section className='contact' id='contact'>
        <h2 className='heading'>Contact <span>Me!</span></h2>
        <form>
            <div className='input-box'>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='Email Address'/>
            </div>
            <div className='input-box'>
                <input type='number' placeholder='Mobile Number'/>
                <input type='text' placeholder='Email Subject'/>
            </div>
            <textarea placeholder='Your Message' cols='30' rows='10'></textarea>
            <input type='submit' value='Send Message' className='btn'/>
        </form>
    </section>
  )
}

export default ContactSection;