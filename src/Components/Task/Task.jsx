import style from './Task.module.css';
import Button from "../Button/Button";
import {RiDeleteBin2Line, RiEdit2Line} from "react-icons/ri";

const Task = ({todo,number, delTask, editTask}) => {
    return (<div className={style.element}>
        <p className={style.number}>№{number}</p>
        <p className={style.text}>{todo.text}</p>
        <Button content={<RiEdit2Line/>} onClick={() => editTask}/>
        <Button content={<RiDeleteBin2Line/>} onClick={() => delTask(todo.id)}/>
    </div>)
}
export default Task;