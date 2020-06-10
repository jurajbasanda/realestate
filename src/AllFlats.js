import React, { Component } from 'react';
import axios from 'axios'
import Flatitem from './Flatitem'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './new.scss'


export default class AllFlats extends Component {
    constructor(){
        super()
    this.state = { 
            flats:[],
            islLoaded:false
    }
}
    componentDidMount(){window.scrollTo(0,0)
                        AOS.init()
                        axios.get('https://admin.jurajbasanda.com/wp-json/wp/v2/property')
                        .then(res => this.setState({
                                        flats: res.data,
                                        islLoaded: true
                                                     }))
                        .catch(err => console.log(err))
                    }
  render() {
      const {flats,islLoaded} = this.state;
      if(islLoaded){
        return (
            <section className='AllFlats'>
            <div className='flats-group'>
            {flats.map(flat => <Flatitem key={flat.id} flat={flat}/>)}
            </div>
            </section>  )   
                }
        else{
            return(
                <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div className="loader"></div>
                </div>
                    )
            }
        }

}
