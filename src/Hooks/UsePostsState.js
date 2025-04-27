import {useState} from "react";
import useNotificationState from "./UseNotificationState";

const UsePostsState = () => {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setPostTitle] = useState("");
    const [newPostBody, setPostBody] = useState("");
    const {setNotification} = useNotificationState();
    const changeTitleInput = (e) => {
        setPostTitle(e.target.value);
    }

    const changeBodyInput = (e) => {
        setPostBody(e.target.value);
    }

    const addPost = () => {
        if (newPostTitle === "" || newPostBody === "") {
            alert("ИМЕЕТЬСЯ ПУСТАЯ СТРОКА!!!")
            return;
        }
        const counterID = posts.length > 0 ? posts[posts.length - 1].id : -1
        setPosts([...posts, {title: newPostTitle, body: newPostBody, id: counterID + 1}])
        setPostTitle("")
        setPostBody("")
        setNotification(`${newPostTitle} добавлен`)
    }

    const delPost = (idPost) => {
        setNotification(`${posts[idPost].title} удалён`)
        setPosts(() => posts.filter(post => post.id !== idPost))
    }

    // useEffect(() => {
    //     if(posts.length>0){
    //         alert(posts[posts.length-1].title + " изменён")
    //     }
    // }, [posts]);

    return {
        posts,
        addPost,
        changeBodyInput,
        changeTitleInput,
        newPostTitle,
        delPost,
        newPostBody
    }

}
export default UsePostsState