import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";
import style from './TaskList.module.css';

const TaskList = ({list, addTask, input, delTask, editTask}) => {
    return (<div className={style.list}>
        <TaskCreator addTask={addTask} input={input.value} change={input.setter}/>
        {list.map((todo,index) => (
            <Task todo={todo} number={index} key={todo.id} delTask={delTask} editTask={editTask}></Task>
        ))}
    </div>)
}

export default TaskList;