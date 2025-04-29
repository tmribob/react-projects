import TaskList from "../Components/TaskList/TaskList";

const TODOPage = ({list,addTask,editTask,delTask,input}) => {

    return (<TaskList list={list} addTask={addTask} editTask={editTask} delTask={delTask}
                      input={input}/>)
}

export default TODOPage;