import './App.css';
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import {useEffect, useState, useContext} from "react";
import TasksContexts from "./Context/task";

function App() {
    const {fetchTask} = useContext(TasksContexts)
    useEffect(() => {
        fetchTask();
    }, []);

    return (
    <div className="App">
      <TaskCreate />
      <h1 className="title"> Tasks </h1>
      <TaskList />
    </div>
  );
}

export default App;

