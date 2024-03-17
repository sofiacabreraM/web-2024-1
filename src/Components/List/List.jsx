import React from 'react';
import './List.css';

export function List({ tasks, setTasks, onTaskCheck, filter }) {
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
    onTaskCheck();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className='container-list'>
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((task, id) => (
            <li key={id}>
              <input type="checkbox" checked={task.completed} onChange={() => handleCheck(id)} className='input-task'/>
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