import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
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
        this.setState(
             {properties:{imgUrl:this.props.flat.acf.image,
                        price: this.props.flat.acf.price,
                        bedroom: this.props.flat.acf.bedroom,
                        bathroom: this.props.flat.acf.bathroom,        
                        id:this.props.flat.id,
                        title: this.props.flat.acf.title,
                        }
                }
                    )
                    }
  render() {
    const {id,title,price,bedroom,imgUrl} = this.state.properties;
    const {isLoaded} = this.state;
    if(!isLoaded){
                return(
                    <div key={id} className='flat-item'>
                    <Link to={`/property/${id}`} className='info-g'>
                    <div className='img' style={{backgroundImage:`url(${imgUrl})`}}/>
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
        <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="loader"></div>
        </div>
                )}
  }
}
