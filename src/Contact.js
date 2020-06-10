import React,{useEffect} from 'react';
import AOS from 'aos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'aos/dist/aos.css'; 
import './contact.scss'

export default function Contact() {
  useEffect(()=> window.scrollTo(0,0))
    AOS.init()
    const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1591737986753!5m2!1sen!2suk"
  return (
    <section className='contact'>
    <h1>Contact Us</h1>
    <div className='office'>
    <h2>Our Offices</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia vulputate tempor.
     In bibendum cursus porttitor. Ut interdum orci eu turpis pharetra, et laoreet quam tristique. 
     Vestibulum bibendum nunc sem, sed posuere nibh euismod quis. Ut rhoncus arcu orci, et mollis justo faucibus non.
      Mauris in feugiat ante. Aenean eget ipsum et sem luctus semper. Nullam bibendum ante consequat commodo laoreet.
    </p>
    <iframe src={map} title='google map' frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
    <ul className='headOffice'>
    <h2>Head office</h2>
    <li>212 Adr Road, London, W13 4NZ</li>
    
    <li>+44 (0)20 0000 0000</li>
    <li>contact@wwww.com</li>
    </ul>
    <Tabs>
    <TabList>
      <Tab>Sales and Lettings</Tab>
      <Tab>Other services</Tab>
      <Tab>Departments</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Sales and Lettings</h2>
      <div className='tab'>
      <ul>
      <h2>office</h2>
    <li>212 Adr Road, London, W13 4NZ</li>
    
    <li>+44 (0)20 0000 0000</li>
    <li>contact@wwww.com</li>
    </ul>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Other services</h2>
    </TabPanel>
    <TabPanel>
    <h2>Departments</h2>
    <div className='tab'>
                          <ul><h3>HR</h3>
                    <li>212 Adr Road, London, W13 4NZ 
                        <br/>London 
                        <br/>SW6 4NZ</li>

                    <li>020 0000 0000</li>
                    <li>AccountsWeb@dng.co.uk</li>
                    </ul>
                    <ul>
                    <h3>Tenancy Management</h3>
                    212 Adr Road, London, W13 4NZ

                    <li>020 0000 0000</li>
                   <li> tenadminweb@www.com</li>
                    </ul>
                    <ul><h3>Marketing</h3>
                    <li>212 Adr Road, London, W13 4NZ</li>

                    <li>020 0000 0000</li>
                   <li> marketing@dng.co.uk</li>
                    </ul>
                    
      </div>
    </TabPanel>
  </Tabs>

      
    </section>
  );
}
