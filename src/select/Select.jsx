import React, { useState, useEffect } from 'react';

const Select = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://cataas.com/cat')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {}
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default Select;
