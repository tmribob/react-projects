import FormHeader from "../Components/FormHeader/FormHeader";
import Posts from "../Components/Posts/Posts";


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
        <FormHeader titleState={{title: newPostTitle, setTitle: changeTitleInput}}
                    bodyState={{body: newPostBody, setBody: changeBodyInput}} addPost={addPost}/>
        <Posts posts={posts} delPost={delPost}/>
    </>)
}

export default PostsPage
