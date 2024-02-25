import React from 'react';
import './UseDiDi.css';

export function UseDiDi (){
    return(
        <div className='usedidi-container'>
        <img src="https://images.ctfassets.net/n7hs0hadu6ro/4YbZWaoLC3Bgzd5jdhZb1Z/3ef4368dc3fde707f1f37ccff65441cf/co.PaxWhyDiDi.image.jpg?w=500&h=500&q=50&fm=webp" 
        alt="" className="img-usedidi" />
        <h2 className='usedidi-title'>Utiliza DiDi</h2>
        <p className='usedidi-info'>Solicita tus arrendamientos, 
        obtén un arrendamiento de vehículo en minutos, a cualquier
        hora y en cualquier día del año.</p>
        <p className='usedidi-info'>Cotiza los precios de todos los
        tipos de viaje, desde los traslados diarios hasta las salidas          
        nocturnas.</p>
        <p className='usedidi-info'>DiDi es una app que conecta
        arrendatarios con arrendadores.</p>
        <button className='usedidi-button'>Descarga DiDi pasajero</button>
        </div>
    )
}
