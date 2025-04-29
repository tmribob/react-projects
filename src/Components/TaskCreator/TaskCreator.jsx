import style from './TaskCreator.module.css';
import Button from "../Button/Button";
import {RiAddLine} from "react-icons/ri";
import InputField from "../InputField/InputField";

const TaskCreator = ({addTask, input, change, isEditing}) => {
    return (<div className={style.form}>
        <InputField readonly={isEditing} name={"creatorTask"} holder={"Entry new task"} onChange={change}
                    value={input}/>
        <Button disable={isEditing} content={<RiAddLine/>} onClick={addTask}/>
    </div>)
}

export default TaskCreator