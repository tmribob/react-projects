import style from './TaskCreator.module.css';
import Button from "../../Button/Button";
import {RiAddLine} from "react-icons/ri";
import Input from "../../Input/Input";

const TaskCreator = ({addTask, input, change, editingID}) => {
    const isAnyEditing = editingID !== null
    return (<div className={style.form}>
        <Input disabled={isAnyEditing} name={"creatorTask"} holder={"Entry new task"} onChange={change}
               value={input}/>
        <Button disabled={isAnyEditing} content={<RiAddLine/>} onClick={addTask}/>
    </div>)
}

export default TaskCreator