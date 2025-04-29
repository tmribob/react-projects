import {useState} from "react";

const UseTODOState = (showNotification) => {
    const [todoList, setTodoList] = useState([])
    const [inputTask, setInputTask] = useState("");
    const [nextId, setNextId] = useState(1);

    const addTask = () => {
        if (inputTask.length > 0) {
            setTodoList((tasks) => [...tasks, {text: inputTask, id: nextId}]);
            setInputTask("");
            setNextId(nextId + 1);
        } else {
            showNotification("Task is void");
        }
    }
    const delTask = (id) => {
        setTodoList((tasks) => tasks.filter((task) => task.id !== id));
    }
    const changeInput = (e) => {
        setInputTask(() => e.target.value);
    }
    return {todoList, addTask, delTask, inputTask, changeInput};
}
export default UseTODOState;