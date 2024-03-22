import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((_, i) => i !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task, i) => (i === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks; 
    }
  };

  return { tasks: filteredTasks(), addTask, deleteTask, toggleTaskCompletion, deleteAllTasks, setFilter };
}
