import React from 'react';
import './Counter.css';
import { useState } from 'react';


const Counter = () =>{
const [Counter, setCounter] = useState(0)


const add = () => {
    setCounter(Counter +1)
}

const substract = () => {
    setCounter(Counter -1)
}
const reset = () =>{
    setCounter(0)
}
    return(
    <div>
        <h1>{Counter}</h1>
        <button className='btn-add' onClick={add}>sumar</button>
        <button className='btn-rest' onClick={reset}>reiniciar</button>
        <button className='btn-substract' onClick={substract}>restar</button>
        
    </div>   
    )
}

export default Counter