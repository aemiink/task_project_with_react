//props ismimizi verdik.
import TaskShow from "./TaskShow"
import {useContext} from "react";
import TasksContexts from "../Context/task";

function TaskList(){
    const {tasks} = useContext(TasksContexts)
    return(
        <div className="task-list">
            {tasks.map((task, index) => {
                return (
                    <TaskShow key={index} task={task}/>
                )
            })}
        </div>
    );
}

export default TaskList;
