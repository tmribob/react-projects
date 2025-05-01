import TaskList from "../Components/TODO/TaskList/TaskList";

const TODOPage = ({
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

    return (<TaskList list={list}
                      inputTask={inputTask}
                      editingID={editingID}
                      changeInput={changeInput}
                      editingText={editingText}
                      changeTask={changeTask}
                      addTask={addTask}
                      startEditing={startEditing}
                      delTask={delTask}
                      saveTask={saveTask}
    />)
}

export default TODOPage;