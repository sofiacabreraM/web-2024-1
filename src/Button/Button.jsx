import React, { useState } from 'react';
import './Button.css'
const CatButton = ({ onClick }) => {
    return (
        <button className='btn-cat' onClick={onClick}>Get new fact</button>
    );
};

export default CatButton;