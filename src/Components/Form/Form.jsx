import React, { useState } from 'react'
import './Form.css'
import imgprofile from '../../images/profile.png'

export function Form ({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleClick = () => {
    if (task.trim() !== '') {
      onAddTask(task)
      setTask('')
    }
  }

  return (
    <div className='container-form'>
    <div className='header-form'>
    <img src={imgprofile} alt="avatar" className="img-profile" />
      <h6>Hello</h6>
      <h5>My tasks</h5>
      </div>
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
  )
}
