import React from 'react';
import './ResultsGrid.css'

const ResultsGrid = ({ results, onAddToFavorites }) => {
  return (
    <div className='results-container'>
      {results.map(result => (
        <div className='result-item' key={result.id}>
          <img src={result.images.fixed_height.url} alt={result.title} />
          <p>{result.title}</p>
          <img src="https://static.vecteezy.com/system/resources/previews/001/187/511/non_2x/heart-png.png" alt="Corazón" className="heart-icon" onClick={() => onAddToFavorites(result)} />

        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;


