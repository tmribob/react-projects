import TaskList from "../Components/TaskList/TaskList";

const TODOPage = ({list, input, editingID, inputEditing, operations}) => {

    return (<TaskList list={list}
                      input={input}
                      editingID={editingID}
                      inputEditing={inputEditing}
                      operations={operations}
    />)
}

export default TODOPage;