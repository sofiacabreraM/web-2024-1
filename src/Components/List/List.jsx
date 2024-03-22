import React from 'react';
import './List.css';
import { useTasksContext } from '../../context/TaskscontextProvider';

export function List() {
  const { tasks, deleteTask, toggleTaskCompletion } = useTasksContext();

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleCheck = (id) => {
    toggleTaskCompletion(id);
  };

  return (
    <div className='container-list'>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, id) => (
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
