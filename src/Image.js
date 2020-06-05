import React, { Component } from 'react';
import axios from 'axios'
import './flat.scss'

export default class Image extends Component {
  constructor(){
    super()
    this.state={
        urlImg:''
    }
  }
    componentDidMount(){
    const {featured_media} = this.props.flat
    axios.get(`https://admin.jurajbasanda.com/wp-json/wp/v2/media/${featured_media}`)  
            .then(img => {this.setState({urlImg:img.data.media_details.sizes.full.source_url})
                        })
            .catch(err=>console.log(err)) }
  render() {
    return (
      <img src={this.state.urlImg} alt='flat' srcSet="" className='head-img'/>
    );
  }
}
