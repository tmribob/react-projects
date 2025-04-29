import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./Pages/PostsPage";
import PokemonPage from "./Pages/PokemonPage";
import EnglishPage from "./Pages/EnglishPage";
import CalculatePage from "./Pages/CalculatePage";
import HeadNav from "./Components/HeadNav/HeadNav";

import UsePostsState from "./Hooks/UsePostsState"
import UsePokemonState from "./Hooks/UsePokemonState"
import UseEnglishState from "./Hooks/UseEnglishState"
import UseCalculatorState from "./Hooks/UseCalculatorState"
import UseNotificationState from "./Hooks/UseNotificationState";
import Notification from "./Components/Notification/Notification";
import TODOPage from "./Pages/TODOPage";
import UseTODOState from "./Hooks/UseTODOState";

const App = () => {
    const {notification, showNotification} = UseNotificationState();
    const {
        posts,
        addPost,
        changeBodyInput,
        changeTitleInput,
        newPostTitle,
        delPost,
        newPostBody
    } = UsePostsState(showNotification);
    const {getPokemon, pokemon} = UsePokemonState();
    const {inputCalculate, buttonsCalculate, firstSummand, operator} = UseCalculatorState(showNotification);
    const {
        textEnglish,
        inputText,
        changeInputText,
        splitText,
        buttons,
        spans,
        addWord,
        delWord,
        clearSentence,
        nextSentence
    } = UseEnglishState();
    const {
        todoList,
        inputTask,
        editingID,
        inputEditing,
        operations
    } = UseTODOState(showNotification);

    return (
        <BrowserRouter>
            <HeadNav/>
            {notification.isVisible && <Notification context={notification.text}/>}
            <Routes>
                <Route path={"/posts"} element={<PostsPage posts={posts}
                                                           addPost={addPost}
                                                           changeBodyInput={changeBodyInput}
                                                           changeTitleInput={changeTitleInput}
                                                           newPostTitle={newPostTitle}
                                                           delPost={delPost}
                                                           newPostBody={newPostBody}/>}/>
                <Route path={"/pokemon"} element={<PokemonPage newPokemon={getPokemon} id={pokemon}/>}/>
                <Route path={"/english"} element={<EnglishPage text={textEnglish}
                                                               inputText={inputText}
                                                               changeInputText={changeInputText}
                                                               splitText={splitText}
                                                               buttons={buttons}
                                                               spans={spans}
                                                               addWord={addWord}
                                                               delWord={delWord}
                                                               clearSentence={clearSentence}
                                                               nextSentence={nextSentence}/>}/>
                <Route path={"/calculator"} element={<CalculatePage buttons={buttonsCalculate}
                                                                    input={inputCalculate}
                                                                    text={firstSummand + " " + operator}/>}/>
                <Route path={"/todo"} element={<TODOPage list={todoList}
                                                         input={inputTask}
                                                         editingID={editingID}
                                                         inputEditing={inputEditing}
                                                         operations={operations}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
