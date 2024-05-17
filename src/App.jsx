import React, { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import ResultsGrid from './ResultsGrid/ResultsGrid';
import FavoritesList from './FavoritesList/FavoritesList';
import debounce from 'just-debounce-it';
import './style.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const debouncedSearch = debounce((term) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=6LPW65CFXS76VmnMw636I0hgLyoHSQV0`)
      .then(response => response.json())
      .then(data => setResults(data.data))
      .catch(error => console.error(error));
  }, 1000); 

  const handleSearch = (term) => {
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const addToFavorites = (gif) => {
    if (!favorites.find(fav => fav.id === gif.id)) {
      setFavorites([...favorites, gif]);
    }
  };

  const removeFromFavorites = (gif) => {
    setFavorites(favorites.filter(fav => fav.id !== gif.id));
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {results.length > 0 ? (
        <>
          <p>{results.length} results for"{searchTerm}"</p>
          <ResultsGrid results={results} onAddToFavorites={addToFavorites} />
        </>
      ) : (
        <p>No results</p>
      
      )}
      
      <FavoritesList favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />
    </div>
  );
};

export default App;
