import React, { useEffect, useState } from 'react';
import { Form } from './Components/Form/Form';
import { Filters } from './Components/Filters/Filters';
import { Footer } from './Components/Footer/Footer';
import { List } from './Components/List/List';

export function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

 
  return (
    <div>
      <Form onAddTask={handleAddTask} />
      <Filters onFilterChange={handleFilterChange} />
      <List tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}
