import Card from "../Card/Card";
import style from "./Posts.module.css"
import Notification from "../Notification/Notification";


const Posts = ({posts, delPost,isVisible,textNotification}) => {
    return (<div className={style.posts}>
        {isVisible && <Notification context={textNotification}/>}
            {posts.map((post) => (<Card key={post.id}
                                        title={post.title}
                                        body={post.body}
                                        delPost={delPost}
                                        id={post.id}/>))}
        </div>);
};

export default Posts;