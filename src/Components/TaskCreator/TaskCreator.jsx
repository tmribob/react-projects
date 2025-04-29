import style from './TaskCreator.module.css';
import Button from "../Button/Button";
import {RiAddLine} from "react-icons/ri";
import InputField from "../InputField/InputField";

const TaskCreator = ({addTask, input, change, editingID}) => {
    const isAnyEditing = editingID !== null
    return (<div className={style.form}>
        <InputField readonly={isAnyEditing} name={"creatorTask"} holder={"Entry new task"} onChange={change}
                    value={input}/>
        <Button disable={isAnyEditing} content={<RiAddLine/>} onClick={addTask}/>
    </div>)
}

export default TaskCreator