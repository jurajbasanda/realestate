import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './contact.scss'

export default function Contact() {
    useEffect(()=> window.scrollTo(0, 0))
    AOS.init()

  return (
    <section className='contact'>
    <h1>Contact Us</h1>
    
      
    </section>
  );
}
