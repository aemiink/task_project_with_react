import './App.css';
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    //Taskları depolamak için tasklar için yeni bir useState() kullanıyoruz. Bu tüm taskleri depolayacağı için array açıyoruz.
    const [tasks, setTasks] = useState([])

    const createTask = async (title, description) => {

        const response = await axios.post('http://localhost:3004/tasks', {title, description});
        const createdTask = [
            // ... spreate özelliğidir. eski değerleri de etkleyecek.
            ...tasks,
            response.data
        ];
        // setTasks() metoduylaa create ettik.
        setTasks(createdTask);
    };
    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3004/tasks/${id}`)
        const afterDelTask = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(afterDelTask);
    }

    const fetchTask = async () => {
        const response = await axios.get('http://localhost:3004/tasks')
        setTasks(response.data);
    }

    useEffect(() => {
        fetchTask();
    }, []);

    const editTaskById = async (id, updateTitle, updateDesc) => {
        await axios.put(`http://localhost:3004/tasks/${id}`, {
            title: updateTitle,
            description: updateDesc
        })
        const updatingTasks = tasks.map((task) => {
            if ( task.id === id){
                return {id , title:updateTitle, description:updateDesc}
            }
            return task;
        });
        setTasks(updatingTasks);
    }

    return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1 className="title"> Tasks </h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
