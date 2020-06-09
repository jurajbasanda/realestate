import React,{Component, useEffect} from 'react';
import {BrowserRouter as BRouter,Route,Switch,Redirect} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import New from './New'
import AllFlat from './AllFlats'
import NotFoundPage from './NotFoundPage'
import Flat from './Flat';
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.scss'
import './new.scss'
// Images
import loanSvg from './img/money.svg'
import researchSvg from './img/research.svg'

export default class App extends Component {
  render() {
    return (
     <BRouter>
     <Nav></Nav>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/property/:id' component={Flat}/>
       <Route path='/property' component={AllFlat}/>
       <Route path='/contact' component={Contact}/>

     <Route path="*" component={NotFoundPage} />
     <Route path="/404" component={NotFoundPage} />
     <Redirect to="/404" />
   </Switch>
   <Footer/>
 </BRouter>
    )
  }
}

function Home() {
  useEffect(()=> window.scrollTo(0, 0))
  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  return (
    <>
    <header>
        <h1 data-aos="slide-right">Welcome to London’s 
            most reliable<br/>
            <span>Real Estate</span> agency</h1>
    </header>
      <section className='about'>
      <h1 data-aos="fade">About us</h1>
      <div data-aos="fade-right" className='about-group'>
      <p>
        Real Estate Ltd is a residential letting and management company based in West London. We have been involved with letting and management
          for over 25 years in Acton, Ealing, Chiswick, Hammersmith, Hampstead and recently Central London.
        We manage over 500 rental properties, providing all types of accommodation from studio flats to luxury family houses.
        <br/>
        <br/>
        Further to this, we are able to offer complete flexibility in terms of furnishing; all of our properties can be provided unfurnished,
          fully furnished, or partly furnished. Just let us know what your requirements are and our team will take care of it.
        <br/>
        <br/>
        Please use the search function at the top of the page to find available properties and browse photos, floorplans and location maps.
    </p>
    <div>
    <ul data-aos="fade-left">
        <li><img src={loanSvg} alt="" srcSet=""/></li>
        <li>We do home loans
             With over 35+ trusted lenders,
              we can help you find a loan. 
        </li>
    </ul>
    <ul data-aos="fade-left">
        <li><img src={researchSvg} alt="" srcSet=""/></li>
        <li>Research suburbs
          Find your place with our local lifestyle, 
          demographics and market info.
        </li>
    </ul>
    </div>
    </div>
      </section>
      <section className='new'>
      <h1>New Flats</h1>
      <div className='flats'>
      <New/>
      </div>
      </section>
    </>
  );
}


