import Card from "../Card/Card";
import style from "./Posts.module.css"


const Posts = ({posts, delPost}) => {
    return (<div className={style.posts}>
            {posts.map((post) => (<Card key={post.id}
                                        title={post.title}
                                        body={post.body}
                                        delPost={delPost}
                                        id={post.id}/>))}
        </div>);
};

export default Posts;