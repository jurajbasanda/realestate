import React, { Component } from 'react';
import axios from 'axios'
import Flatitem from './Flatitem'

import './new.scss'


export default class New extends Component {
    constructor(){
        super()
    this.state = { 
            flats:[],
            islLoaded:false
    }
}
    componentDidMount(){
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
            <section className='new'>
            <h1>New Flats</h1>
            <div className='flats-group'>
            {flats.map(flat => <Flatitem key={flat.id} flat={flat}/>)}
            </div>
            </section>  )   
                }
        else{
            return(<section className='new'>
                <h1>New Flats</h1>
                <div className="loader"></div>
                        </section>
                    )
            }
        }

}
