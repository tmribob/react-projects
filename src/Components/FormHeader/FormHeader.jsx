import style from "./FormHeader.module.css"
import InputField from "../InputField/InputField";
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";

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
            <ButtonConfirm onClick={addPost}/>
        </header>);
}

export default FormHeader