import './Footer.css';
import React from 'react';

export function Footer({ completedTasksCount, totalTasksCount, onDeleteAll }) {
  const handleDeleteAll = () => {
    onDeleteAll();
  };

  return (
    <div className='container-footer'>
      <p>
        <strong>{completedTasksCount}</strong> tasks completed out of  <strong>{totalTasksCount}</strong>
      </p>
      <button className='delete-all' onClick={handleDeleteAll}>delete all</button>
    </div>
  );
}

