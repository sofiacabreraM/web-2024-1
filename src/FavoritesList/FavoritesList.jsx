import React from 'react';
import './FavoritesList.css'

const FavoritesList = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div className='favorites-container '>
      <div className='favorites'>
      <h2>FAVORITES:</h2>
      </div>
      {favorites.map(favorite => (
        <div key={favorite.id}>
          <img src={favorite.images.fixed_height.url} alt={favorite.title} />
          <p>{favorite.title}</p>
          <button className='eliminar' onClick={() => onRemoveFromFavorites(favorite)}>Remove from favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
