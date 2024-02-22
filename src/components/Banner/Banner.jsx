import React from 'react';
import './Banner.css';
import carImg from '../../images/img2.png'


export function Banner() {
    return (
      <div className="banner-container">
        <div className="text-content">
          <h6 className="description">DiDi pasajero</h6>
          <h2 className="title">Muévete por tu Ciudad con DiDi Pasajero</h2>
          <p className="message-banner">La app donde recibes más y viajas mejor.</p>
          <button className="btn">Descarga DiDi Pasajero</button>
        </div>
        <img src={carImg} alt="car" className="img-banner" />
      </div>
    );
  }