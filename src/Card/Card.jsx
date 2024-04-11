import React, { useState, useEffect } from 'react';

const Card = () => {
    const [catImage, setCatImage] = useState('');

    useEffect(() => {
        
        fetch('https://cataas.com/cat')
            .then(response => {
                
                if (response.ok) {
                    setCatImage(response.url);
                } else {
                   
                    console.error('Error fetching cat image:', response.statusText);
                }
            })
            .catch(error => console.error('Error fetching cat image:', error));
    }, []);

    return (
        <div className='card'>
            <img src={catImage} alt="Cat" />
        </div>
    );
};

export default Card;
