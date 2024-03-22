import React, { useState } from 'react';
import './Filters.css';
import { useTasksContext } from '../../context/TaskscontextProvider';

export function Filters() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { setFilter } = useTasksContext();

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <form className='container-filter'>
      <input type='radio' id='all' name='filter' value='all' checked={selectedFilter === 'all'} onChange={handleFilterChange} className='all-input'/>
      <label htmlFor='all' className='all-label'>All</label>
      <input type='radio' id='completed' name='filter' value='completed' checked={selectedFilter === 'completed'} onChange={handleFilterChange} className='completed-input' />
      <label htmlFor='completed' className='completed-label'>Completed</label>
      <input type='radio' id='pending' name='filter' value='pending' checked={selectedFilter === 'pending'} onChange={handleFilterChange} className='pending-input'/>
      <label htmlFor='pending' className='pending-label'>Pending</label>
    </form>
  );
}
