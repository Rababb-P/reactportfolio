import React from 'react';
import { HoverImageLinks } from './HoverImageLinks';
import useFadeInOnScroll from './fadehook';

function Contact() {
  const textRef = useFadeInOnScroll();

  return (
    <div>
      <div id="contact" className='top-contact'></div>
      <p ref={textRef} className='contact-text'>
      Feel free to contact me on any of these platforms for future collaborations in hackathons and internship opportunities! You can also read my articles on the Beacon website and stay up to date with my future projects on my personal github!
      </p>

      <div className='contactimages'>
        <HoverImageLinks />
      </div>
    </div>
  );
}

export default Contact;
