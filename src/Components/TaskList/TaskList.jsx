import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";
import style from './TaskList.module.css';

const TaskList = ({list, input, editingID, inputEditing, operations}) => {
    return (<div className={style.list}>
        <TaskCreator addTask={operations.addTask}
                     input={input.text}
                     change={input.onChange}
                     isEditing={editingID !== null}/>
        {list.map((task, index) => (
            <Task task={task}
                  number={index}
                  key={task.id}
                  editingID={editingID}
                  operations={operations}
                  inputEditing={inputEditing}
            />
        ))}
    </div>)
}

export default TaskList;