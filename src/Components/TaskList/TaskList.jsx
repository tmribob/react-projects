import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";
import style from './TaskList.module.css';

const TaskList = ({
                      list,
                      inputTask,
                      editingID,
                      changeInput,
                      editingText,
                      changeTask,
                      addTask,
                      startEditing,
                      delTask,
                      saveTask
                  }) => {
    return (<div className={style.list}>
        <TaskCreator addTask={addTask}
                     input={inputTask}
                     change={changeInput}
                     editingID={editingID}/>
        {list.map((task, index) => (
            <Task task={task}
                  number={index}
                  key={task.id}
                  editingID={editingID}
                  startEditing={startEditing}
                  delTask={delTask}
                  saveTask={saveTask}
                  editingText={editingText}
                  changeTask={changeTask}
            />
        ))}
    </div>)
}

export default TaskList;