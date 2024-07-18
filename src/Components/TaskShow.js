import './ComCss/taskShow.css'
import {useState} from "react";
import TaskCreate from "./TaskCreate";
import {useContext} from "react";
import TasksContexts from "../Context/task";


function TaskShow({task, onDelete, onUpdate}){
    const {editTaskById, deleteTaskById} = useContext(TasksContexts)

    const [showEdit, setShowEdit] = useState(false)
    const deleteClick = () => {
        //onDelete(task.id)
        deleteTaskById(task.id)
    };

    const editClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, updateTitle, updateDesc) => {
        setShowEdit(false);
        editTaskById(id, updateTitle, updateDesc);
    };

    return(
        <div className="TaskShow">
            {showEdit ? (
                <div>
                    <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/>
                </div>
            ) : (
                <div>
                    <div className="tasks">
                        <h3> Assigment</h3>
                        <p>{task.title}</p>
                    </div>
                    <div className="tasks">
                        <h3> Assigment Description</h3>
                        <p> {task.description}</p>
                    </div>

                    <div className="buttons">
                        <button className="new button is-danger" onClick={deleteClick}>Delete</button>
                        <button className="new button is-link" onClick={editClick}> Update</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskShow;
