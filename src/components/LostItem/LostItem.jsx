import React from 'react';
import './LostItem.css';


export function LostItem (){
    return(
    <div className='item-container'>
    <h2 className='item-title'>¿Olvidaste un objeto en el vehículo?</h2>
    <p className='item-description'>Da clic en el botón de abajo, dirígete a Preguntas 
    Pasajeros, Inconvenientes con un arrendamiento y en la sección Olvidé un objeto en 
    el vehículo llena el formulario para poder ayudarte</p>
    <button className='item-Button'>Como recuperarlo</button>
    </div>
    
    )
}