import React from 'react';
import './Info.css';
import icon1 from '../../../images/iconCash.png'
import icon2 from '../../../images/iconClock.png'
import icon3 from '../../../images/iconUser.png'

export function Info() {
  return (
    <div className="info-container">
    <div className="content-one">
    <img src={icon3} alt="" srcset=""  className='icon-info'/>
    <h4 className="titleInfo">Amplia disponibilidad y cobertura</h4>
    <p className="descriptionInfo">Tenemos opciones que se adaptan a tus 
    necesidades de movilidad, ¡encuéntranos en las principales ciudades
    de Colombia!</p>
    </div>

    <div className="content-two">
    <img src={icon1} alt="" srcset=""  className='icon-info' />
    <h4 className="titleInfo">Tarifas justas</h4>
    <p className="descriptionInfo">Disfruta de arrendamientos sin pagar de más.</p>
    </div>

    <div className="content-three">
    <img src={icon2} alt="" srcset=""  className='icon-info' />
    <h4 className="titleInfo">Soporte 24/7</h4>
    <p className="descriptionInfo">Tu seguridad es nuestra prioridad.
    Por eso contamos con soporte 24/7 en nuestro Chat en vivo, 
    allí atenderemos todas tus dudas y solicitudes.</p>
    </div>
    </div>

    
  );
}