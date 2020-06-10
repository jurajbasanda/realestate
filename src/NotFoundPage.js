import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default class NotFoundPage extends Component {
  render() {
    AOS.init()
    return (
      <div style={{width:"100%",height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <h1>404 Sorry, page is not found</h1>
      </div>
    );
  }
}
