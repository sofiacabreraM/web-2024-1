import React, { useState } from 'react';
import './SearchForm.css'
const SearchForm = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SEARCH GIFS APP</h1>
      <div className='container-search'>
      <input type="text" value={term} onChange={handleChange} className='barra-buscar' placeholder="Search GIFs" />
      <button className='btn-search' type="submit">Search</button>     </div>
    </form>
  );
};

export default SearchForm;


