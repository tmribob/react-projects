import {useState} from "react";

const UseTODOState = (showNotification) => {
    const [todoList, setTodoList] = useState([])
    const [inputTask, setInputTask] = useState("");

    const addTask = () => {
        setTodoList((tasks) => {
            let text = inputTask;
            if (text !== "") {
                setInputTask("");
                return [...tasks, {text, id: tasks.length}];
            } else {
                showNotification("Task is void");
                return tasks;
            }
        });
    }
    const delTask = (id) => {
        setTodoList((tasks) => tasks.filter((task) => task.id !== id));
    }
    const editTask = (id) => {
        console.log(id);
    }
    const changeInput = (e) => {
        setInputTask(() => e.target.value);
    }
    return {todoList, addTask, editTask, delTask, inputTask, changeInput};
}
export default UseTODOState;