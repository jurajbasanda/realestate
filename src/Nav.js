import React,{useState} from 'react';

import './nav.scss'
import logo from './img/logo.png'
import { Link } from 'react-router-dom';


export default function Nav() {
    const [Menu, setMenu] = useState('mobile-close')
    const openMenu = () =>{ (Menu === 'mobile-close') ? setMenu('mobile-open') : setMenu('mobile-close')}
  return (
    <>
    <nav data-aos="fade-down">
      <div className='logo'  onClick={() => setMenu('mobile-close')}><Link to='/'><img src={logo} alt="" srcSet=""/></Link></div>
      <div className='burger' data-aos="fade-down" onClick={openMenu}><i className="im im-menu"></i></div>
      <ul className='desktop' data-aos="fade-down">
      <li onClick={openMenu}><Link to='/'>Home</Link></li>
      <li onClick={openMenu}><Link to='/property'>To Rent</Link></li>
      <li onClick={openMenu}><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
    <ul className={Menu}>
    <li onClick={openMenu}><Link to='/'>Home</Link></li>
      <li onClick={openMenu}><Link to='/property'>To Rent</Link></li>
      <li onClick={openMenu}><Link to='/contact'>Contact</Link></li>
      </ul>
      </>
  );
}
