import React, { useState } from 'react';
import './Form.css';

export function Form({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className='container-form'>
      <h1>Todo List App</h1>
      <div className='task-content'>
        <input
          type="text"
          placeholder="Hacer tareas..."
          value={task}
          onChange={handleChange}
        />
        <button className={task.trim() !== '' ? 'btn-task-filled' : 'btn-task'} onClick={handleClick}>Add task</button>
      </div>
    </div>
  );
}
