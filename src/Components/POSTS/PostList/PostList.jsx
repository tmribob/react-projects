import Post from "../Post/Post";
import style from "./PostList.module.css"

const PostList = ({posts, delPost}) => {
    return (<div className={style.posts}>
        {posts.map((post) => (<Post key={post.id}
                                    title={post.title}
                                    body={post.body}
                                    delPost={delPost}
                                    id={post.id}/>))}
    </div>);
};

export default PostList;