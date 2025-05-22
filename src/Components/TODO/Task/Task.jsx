import style from './Task.module.css';
import Button from "../../Button/Button";
import {RiDeleteBin2Line, RiEdit2Line, RiCheckFill} from "react-icons/ri";
import Input from "../../Input/Input";

const Task = ({
                  task,
                  number,
                  editingID,
                  startEditing,
                  delTask,
                  saveTask,
                  editingText,
                  changeTask
              }) => {
    const isThisEditing = editingID === task.id;
    const isAnyEditing = editingID !== null;

    return (<div className={style.element}>
        <p className={style.number}>№{number+1}</p>
        {!isThisEditing ? <>
            <p>{task.text}</p>
            <Button disabled={isAnyEditing}
                    content={<RiEdit2Line/>}
                    onClick={() => startEditing(task.id, task.text)}/>
        </> : <>
            <Input value={editingText}
                   onChange={changeTask}
                   holder={"New task Text"}/>
            <Button content={<RiCheckFill/>}
                    onClick={saveTask}/>
        </>}

        <Button disabled={isAnyEditing}
                content={<RiDeleteBin2Line/>}
                onClick={() => delTask(task.id)}/>
    </div>)
}
export default Task;