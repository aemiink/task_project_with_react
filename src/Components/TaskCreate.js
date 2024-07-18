import './ComCss/taskCreate.css'
import 'bulma/css/bulma.css'
import {useState} from "react";
import {useContext} from "react";
import TasksContexts from "../Context/task";


function TaskCreate({task, taskformUpdate, onUpdate}){

    const {editTaskById , createTask} = useContext(TasksContexts)

    const [title, setTitle] = useState(task ? task.title : "")
    const [description, setDescription] = useState(task ? task.description : "")


    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescChange = (event) => {
        setDescription(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if(taskformUpdate) {
            onUpdate(task.id, title, description);
        }
        else{
            createTask(title, description);
        }
        setTitle('');
        setDescription('');
    }
    return(
        <div>{taskformUpdate ? (<div className="App">
            <form className="forms">
                <div className="field">
                    <label className="label">Edit Title</label>
                    <div className="control">
                        <input value={title} onChange={handleChange} className="input" type="text"
                               placeholder="Enter the title"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Edit Tasks</label>
                    <div className="control">
                        <textarea value={description} onChange={handleDescChange} rows="6" className="textarea"
                                  placeholder="Enter the task"></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={submitForm} className="button is-warning">Edit</button>
                    </div>
                </div>
            </form>
        </div>):(<div className="App">
            <form className="forms">
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input value={title} onChange={handleChange} className="input" type="text"
                               placeholder="Enter the title"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Add Task!</label>
                    <div className="control">
                        <textarea value={description} onChange={handleDescChange} rows="6" className="textarea"
                                  placeholder="Enter the task"></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={submitForm} className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>)
        }</div>
    );
}

export default TaskCreate;
