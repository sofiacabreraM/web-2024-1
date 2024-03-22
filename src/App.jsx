import React from 'react';
import { Form } from './Components/Form/Form';
import { Filters } from './Components/Filters/Filters';
import { Footer } from './Components/Footer/Footer';
import { List } from './Components/List/List';
import { TasksContextProvider } from './context/TaskscontextProvider';

export function App() {
  return (
    <TasksContextProvider>
      <div>
        <Form />
        <Filters />
        <List />
        <Footer />
      </div>
    </TasksContextProvider>
  );
}