import TaskList from "../Components/TaskList/TaskList";

const TODOPage = ({list, addTask, delTask, input}) => {

    return (<TaskList list={list} addTask={addTask} delTask={delTask}
                      input={input}/>)
}

export default TODOPage;