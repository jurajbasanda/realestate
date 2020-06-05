import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import './new.scss'

export default class Flatitem extends Component {
    constructor(){
        super()
        this.state ={ 
            properties:{
                        id:"",
                        title: "",
                        imgUrl: "",
                        price:"",
                        bedroom:"",
                        bathroom:"",
                        content:""
                        },
            isLoaded: false,
        }
    }
    static propTypes = {
        flat: PropTypes.object.isRequired
    }
    componentDidMount(){
        const {featured_media} = this.props.flat;
        axios.get(`https://admin.jurajbasanda.com/wp-json/wp/v2/media/${featured_media}`)
                                .then(img => {
                                    this.setState(
                                        {properties:{imgUrl:img.data.media_details.sizes.full.source_url, 
                                                    price: this.props.flat.acf.price,
                                                    bedroom: this.props.flat.acf.bedroom,
                                                    bathroom: this.props.flat.acf.bathroom,
                                                    content:this.props.flat.excerpt.rendered,
                                                    id:this.props.flat.id,
                                                    title: this.props.flat.title.rendered,
                                                    }
                                       }
                                                )
                                    })
                                .catch(err=>console.log(err))    
                    }
  render() {
    const {id,title,price,bedroom,imgUrl} = this.state.properties;
    const {isLoaded} = this.state;
    if(!isLoaded){
                return(
                    <div className='flat-item'>
                    <Link to={`/property/${id}`}>
                    <img src={imgUrl} alt="" srcSet=""/>
                    <div className='title-info'>
                    <h2>{title}</h2>
                    <p>{bedroom} Bedroom Flat To Rent<br/>
                    for {price} £ pm</p>
                    </div>
                    </Link>
                                </div>
                    )
                }
    else{
        return(
        <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}><div className="loader"></div></div>
                )}
  }
}
