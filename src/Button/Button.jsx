import React, { useState } from 'react';
import './Button'
const CatButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Get new fact</button>
    );
};

export default CatButton;