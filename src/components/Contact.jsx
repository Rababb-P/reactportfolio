import React from 'react';
import { HoverImageLinks } from './HoverImageLinks';

function Contact() {
  return (
    <div>
      <div id="contact" className='top-contact'></div>
      <p className='contact-text'>
        Feel free to contact me on any of these platforms to collaborate for hackathons, reach out for internship opportunities in tech, or read my articles on the Beacon website, or check out my Github to see what I've been working on!
      </p>

      <div className='contactimages'>
        <HoverImageLinks />
      </div>
    </div>
  );
}

export default Contact;
