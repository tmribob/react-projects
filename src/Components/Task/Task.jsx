import style from './Task.module.css';
import Button from "../Button/Button";
import {RiDeleteBin2Line, RiEdit2Line, RiCheckFill} from "react-icons/ri";
import InputField from "../InputField/InputField";

const Task = ({task, number, editingID, operations, inputEditing}) => {
    return (<div className={style.element}>
        <p className={style.number}>№{number}</p>
        {!(editingID === task.id) ? <>
            <p className={style.text}>{task.text}</p>
            <Button disable={!(editingID === null)}
                    content={<RiEdit2Line/>}
                    onClick={() => operations.startEditing(task.id, task.text)}/>
        </> : <>
            <InputField value={inputEditing.text}
                        onChange={inputEditing.onChange}
                        holder={"New task Text"}/>
            <Button content={<RiCheckFill/>}
                    onClick={() => operations.saveTask(task.id)}/>
        </>}

        <Button disable={!(editingID === null)}
                content={<RiDeleteBin2Line/>}
                onClick={() => operations.delTask(task.id)}/>
    </div>)
}
export default Task;