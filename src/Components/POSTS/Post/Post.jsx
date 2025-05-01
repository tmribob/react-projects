import style from "./Post.module.css"
import Button from "../../Button/Button";

const Post = ({title, body, delPost, id}) => {
    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button onClick={() => {delPost(id)}} content={"X"}/>
        </div>
    );
};

export default Post;