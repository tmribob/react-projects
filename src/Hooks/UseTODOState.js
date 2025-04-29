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
            setNextId(nextId + 1);
        } else {
            showNotification("Task is void");
        }
    }
    const delTask = (id) => {
        setTodoList((tasks) => tasks.filter((task) => task.id !== id));
    }
    const startEditing = (id, text) => {
        if (editingID === null) {
            setEditingID(() => id);
            setEditingText(text);
            setTodoList((tasks) => tasks.map((task) => {
                if (task.id === id) {
                    return {...task, text: editingText};
                }
                return task;
            }));
            console.log(todoList);
        }
    }
    const saveTask = (id) => {
        setEditingID(null);
        setTodoList((tasks) => tasks.map((task) => {
            if (task.id === id) {
                return {...task, text: editingText};
            }
            return task;
        }));
    }
    const changeInput = (e) => {
        setInputTask(() => e.target.value);
    }
    const changeTask = (e) => {
        setEditingText(() => e.target.value);
    }
    return {
        todoList,
        inputTask: {text: inputTask, onChange: changeInput},
        editingID,
        inputEditing: {text: editingText, onChange: changeTask},
        operations: {addTask, startEditing, delTask, saveTask}
    };
}
export default UseTODOState;