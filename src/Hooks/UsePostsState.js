import {useState} from "react";

const UsePostsState = (showNotification) => {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setPostTitle] = useState("");
    const [newPostBody, setPostBody] = useState("");
    const changeTitleInput = (e) => {
        setPostTitle(e.target.value);
    }

    const changeBodyInput = (e) => {
        setPostBody(e.target.value);
    }

    const addPost = () => {
        if (newPostTitle === "" || newPostBody === "") {
            showNotification("ИМЕЕТЬСЯ ПУСТАЯ СТРОКА!!!");
            return;
        }
        const counterID = posts.length > 0 ? posts[posts.length - 1].id + 1 : 0;
        setPosts([...posts, {title: newPostTitle, body: newPostBody, id: counterID}]);
        setPostTitle("");
        setPostBody("");
        showNotification(`${newPostTitle} добавлен`);
    }

    const delPost = (idPost) => {
        showNotification(`${posts[idPost].title} удалён`);
        setPosts(() => posts.filter(post => post.id !== idPost));
    }

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
export default UsePostsState;