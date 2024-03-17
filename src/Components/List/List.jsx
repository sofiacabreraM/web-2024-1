import React from 'react';
import './List.css';

export function List({ tasks, setTasks }) {
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((_, i) => i !== id);
    setTasks(updatedTasks);
  };

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='container-list'>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, id) => (
            <li key={id}>
              <input type="checkbox" checked={task.completed} onChange={() => handleCheck(id)}  className='input-task'/>
              <span className={task.completed ? 'completed' : ''}>{task.text}</span>
              <button onClick={() => handleDelete(id)} className='button-task'>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className='title-list'>No hay tareas para mostrar</h3>
      )}
    </div>
  );
}
