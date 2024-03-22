import React from 'react';
import './Footer.css';
import { useTasksContext } from '../../context/TaskscontextProvider';

export function Footer() {
  const { tasks, deleteAllTasks } = useTasksContext();

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const totalTasksCount = tasks.length;

  const handleDeleteAll = () => {
    deleteAllTasks();
  };

  return (
    <div className='container-footer'>
      <p>
        <strong>{completedTasksCount}</strong> tasks completed out of <strong>{totalTasksCount}</strong>
      </p>
      <button className='delete-all' onClick={handleDeleteAll}>Delete all</button>
    </div>
  );
}