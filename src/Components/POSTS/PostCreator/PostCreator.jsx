import style from "./PostCreator.module.css"
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const PostCreator = ({titleState, bodyState, addPost}) => {
    return (<header className={style.newPostField}>
            <Input name="title"
                   value={titleState.title}
                   holder="Enter title post"
                   onChange={titleState.setTitle}/>
            <Input name="context"
                   value={bodyState.body}
                   holder="Enter content post"
                   onChange={bodyState.setBody}/>
            <Button onClick={addPost} content={"Confirm"}/>
        </header>);
}

export default PostCreator