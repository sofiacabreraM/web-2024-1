import React, { useEffect, useState } from 'react';
import { Form } from './Components/Form/Form';
import { Filters } from './Components/Filters/Filters';
import { Footer } from './Components/Footer/Footer';
import { List } from './Components/List/List';

export function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [totalTasksCount, setTotalTasksCount] = useState(0);

  useEffect(() => {
    setTotalTasksCount(tasks.length);
    const completedCount = tasks.reduce((count, task) => count + (task.completed ? 1 : 0), 0);
    setCompletedTasksCount(completedCount);
  }, [tasks]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handleTaskCheck = () => {
    setCompletedTasksCount(completedTasksCount + 1);
    setTotalTasksCount(totalTasksCount + 1);
  };

  const handleDeleteAll = () => {
    setTasks([]);
    setCompletedTasksCount(0);
    setTotalTasksCount(0);
  };

  return (
    <div>
      <Form onAddTask={handleAddTask} />
      <Filters onFilterChange={handleFilterChange} />
      <List tasks={tasks} setTasks={setTasks} onTaskCheck={handleTaskCheck} />
      <Footer completedTasksCount={completedTasksCount} totalTasksCount={totalTasksCount} onDeleteAll={handleDeleteAll} />
    </div>
  );
}
