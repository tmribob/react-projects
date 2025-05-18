import {useState} from "react";


const UseTODOState = (showNotification) => {
    const [todoList, setTodoList] = useState([])
    const [inputTask, setInputTask] = useState("");
    const [nextId, setNextId] = useState(1);
    const [editingID, setEditingID] = useState(null);
    const [editingText, setEditingText] = useState("");

    const addTask = () => {
        if (inputTask.trim().length > 0) {
            setTodoList((tasks) => [...tasks, {text: inputTask, id: nextId}]);
            setInputTask("");
            showNotification(`Task added`);
            setNextId(nextId + 1);
        } else {
            showNotification("Task is void");
        }
    }
    const delTask = (id) => {
        setTodoList((tasks) => tasks.filter((task) => task.id !== id));
        showNotification(`Task delete`);

    }
    const startEditing = (id, text) => {
        setEditingID(id);
        setEditingText(text);
    }
    const saveTask = () => {
        if (editingText.trim().length > 0) {
            setEditingID(null);
            setTodoList((tasks) => tasks.map((task) => {
                if (task.id === editingID) {
                    return {...task, text: editingText};
                }
                return task;
            }));
            showNotification(`Task edited`);
        } else {
            showNotification("Task is void");
        }
    }
    const changeInput = (e) => {
        setInputTask(e.target.value);
    }
    const changeTask = (e) => {
        setEditingText(e.target.value);
    }
    return {
        todoList,
        inputTask,
        changeInput,
        editingID,
        editingText,
        changeTask,
        addTask,
        startEditing,
        delTask,
        saveTask
    };
}
export default UseTODOState;