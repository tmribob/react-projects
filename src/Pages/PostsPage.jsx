import PostCreator from "../Components/POSTS/PostCreator/PostCreator";
import PostList from "../Components/POSTS/PostList/PostList";


const PostsPage = ({
                       newPostTitle,
                       changeTitleInput,
                       newPostBody,
                       changeBodyInput,
                       addPost,
                       posts,
                       delPost
                   }) => {
    return (<>
        <PostCreator titleState={{title: newPostTitle, setTitle: changeTitleInput}}
                     bodyState={{body: newPostBody, setBody: changeBodyInput}} addPost={addPost}/>
        <PostList posts={posts} delPost={delPost}/>
    </>)
}

export default PostsPage
