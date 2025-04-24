import style from "./FormHeader.module.css"
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const FormHeader = ({titleState, bodyState, addPost}) => {
    return (<header className={style.newPostField}>
            <InputField name="title"
                        value={titleState.title}
                        holder="Enter title post"
                        onChange={titleState.setTitle}/>
            <InputField name="context"
                        value={bodyState.body}
                        holder="Enter content post"
                        onChange={bodyState.setBody}/>
            <Button onClick={addPost} content={"Confirm"}/>
        </header>);
}

export default FormHeader