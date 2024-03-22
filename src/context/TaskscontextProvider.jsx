import React, { createContext, useContext } from 'react';
import { useTasks } from '../hooks/useTasks';

const TasksContext = createContext();

export function TasksContextProvider({ children }) {
  const tasksContextValue = useTasks();

  return (
    <TasksContext.Provider value={tasksContextValue}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  return useContext(TasksContext);
}