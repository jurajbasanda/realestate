import React,{useState} from 'react';

import './nav.scss'
import logo from './img/logo.png'
import { Link } from 'react-router-dom';


export default function Nav() {
    const [Menu, setMenu] = useState('mobile-close')
    const openMenu = () =>{ (Menu === 'mobile-close') ? setMenu('mobile-open') :  setMenu('mobile-close')}
  return (
    <nav>
      <div className='logo' data-aos="fade-down" onClick={() => setMenu('mobile-close')}><Link to='/'><img src={logo} alt="" srcSet=""/></Link></div>
      <ul className={Menu} data-aos="fade-down">
      <li onClick={openMenu}><Link to='/'>Home</Link></li>
      <li onClick={openMenu}><Link>Areas</Link></li>
      <li onClick={openMenu}><Link>Tenants</Link></li>
      <li onClick={openMenu}><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='burger' data-aos="fade-down" onClick={openMenu}><i className="im im-menu"></i></div>
      <ul className='desktop' data-aos="fade-down">
      <li onClick={openMenu}><Link to='/'>Home</Link></li>
      <li onClick={openMenu}><Link>Areas</Link></li>
      <li onClick={openMenu}><Link>Tenants</Link></li>
      <li onClick={openMenu}><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}