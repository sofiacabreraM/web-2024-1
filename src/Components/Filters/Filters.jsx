import React, { useState } from 'react';
import './Filters.css';

export function Filters({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <form className='container-filter'>
      <input type="radio" id="all" name="filter" value="all" checked={selectedFilter === 'all'} onChange={handleFilterChange} />
      <label htmlFor="all">All</label>
      <input type="radio" id="completed" name="filter" value="completed" checked={selectedFilter === 'completed'} onChange={handleFilterChange} />
      <label htmlFor="completed">Completed</label>
      <input type="radio" id="pending" name="filter" value="pending" checked={selectedFilter === 'pending'} onChange={handleFilterChange} />
      <label htmlFor="pending">Pending</label>
    </form>
  );
}
