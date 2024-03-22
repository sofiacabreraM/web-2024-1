import React, { createContext, useContext } from 'react';

const TasksContext = createContext();

export const useTasksContext = () => useContext(TasksContext);

export const TasksContextProvider = ({ children }) => {
  const tasksContextValue = useTasks();
  
  return (
    <TasksContext.Provider value={tasksContextValue}>
      {children}
    </TasksContext.Provider>
  );
};