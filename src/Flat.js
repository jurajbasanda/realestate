import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './flat.scss'

export default class Flat extends Component {
   constructor() {
       super()
       this.state= {
        flat:'',
        inLoaded:false,
    }
   }
    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get(`https://admin.jurajbasanda.com/wp-json/wp/v2/property/${this.props.match.params.id}`)
                .then(res => this.setState({
                    flat:res.data,
                    inLoaded:true,
                }),console.log(this.state.flat))
               
                .catch(err => console.log(err))
            }
  render() {
      AOS.init()
      const {inLoaded,flat} = this.state;
      if(inLoaded){
                return (
                <section className='flat'>
                <h1>{flat.acf.title}, {flat.acf.location}, {flat.id}</h1>
                    <div className='head-group'>
                    <div className='head-img'>
                    <img src={flat.acf.image} alt={flat.acf.title} />
                    </div>
                    <div className="info">
                    <table>
                    <tbody>
                    <tr><td>Monthly rent:</td><td>£ {flat.acf.price}.00</td></tr>
                    <tr><td>Location:</td><td>{flat.acf.location}</td></tr>
                    <tr><td>Bedrooms:</td><td>{flat.acf.bedroom}</td></tr>
                    <tr><td>Bathrooms:</td><td>{flat.acf.bathroom}</td></tr>
                    <tr><td>Year built:</td><td>2001</td></tr>
                    <tr><td>Garage:</td><td>1</td></tr>
                    <tr><td>Water:</td><td>Public District</td></tr>
                    <tr><td>Heating:</td><td>Central</td></tr>
                    </tbody>
                    </table>
                    </div>
                        {/*<div className='info'>
                            <h1>{flat.acf.title}</h1>
                            <p className='price'><i className="im im-tag" /> {flat.acf.price} £ pm</p>
                            <p><span><i className="fas fa-bed" /> {flat.acf.bedroom}</span>
                            <span><i className="fas fa-bath" /> {flat.acf.bathroom}</span>
                            </p>
                </div>*/}
                    </div>
                    <div className="content">
                    <h2>Property Description</h2>
                    <p className='content'>{flat.acf.content}</p>
                    </div>
                    <div className='gallery'>
                    <img src={flat.acf.image2} srcSet='' alt='' />
                    <img src={flat.acf.image3} srcSet='' alt='' />
                    <img src={flat.acf.image4} srcSet='' alt='' />
                    </div>
                <div className='more-info'>
                
                <div>
                    <ul>
                    <li><h3>Energy certificates</h3></li>
                    <li><img src={flat.acf.energy} alt="" srcSet=""/></li>
                    </ul>
                    </div>
                    <div className='interested'>
                    <h3>Interested in this property?</h3>
                    <p>Call to us <a href="tel:+020 0000 0000" className='call-btn'>020 0000 0000</a></p>    
                    <Link to='/contact' className='offer-btn'>Make an offer</Link>
                </div>
                    </div>
                
                </section>
                );
                }
        else{return(
            <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="loader"></div>
            </div>
        )}
  }
}
