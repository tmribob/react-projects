import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PostsPage from "./Pages/PostsPage";
import UsePostsState from "./Hooks/UsePostsState";
import PokemonPage from "./Pages/PokemonPage";
import UsePokemonState from "./Hooks/UsePokemonState";
import EnglishPage from "./Pages/EnglishPage";
import UseEnglishState from "./Hooks/UseEnglishState";
import CalculatePage from "./Pages/CalculatePage";
import UseCalculatorState from "./Hooks/UseCalculatorState";
import Notification from "./Components/Notification/Notification";
import UseNotificationState from "./Hooks/UseNotificationState";
import TODOPage from "./Pages/TODOPage";
import UseTODOState from "./Hooks/UseTODOState";
import HeadNav from "./Components/HeadNav/HeadNav";


const App = () => {
    const refs = ["posts", "pokemon", "english", "calculator", "todo"];
    const {
        notification,
        showNotification
    } = UseNotificationState();
    const {
        posts,
        addPost,
        changeBodyInput,
        changeTitleInput,
        newPostTitle,
        delPost,
        newPostBody
    } = UsePostsState(showNotification);
    const {
        getPokemon,
        pokemon
    } = UsePokemonState();
    const {
        textCalculate,
        buttonsCalculate,
        firstSummand,
        operator
    } = UseCalculatorState(showNotification);
    const {
        status,
        inputText,
        changeInputText,
        startGame,
        buttons,
        spans,
        changeButton,
        clearSentence,
        nextSentence,
        progress,
        goHome,
        currentIndex,
        changeSentence
    } = UseEnglishState(showNotification);
    const {
        todoList,
        inputTask,
        changeInput,
        editingID,
        editingText,
        changeTask,
        addTask,
        startEditing,
        delTask,
        saveTask
    } = UseTODOState(showNotification);

    return (
        <BrowserRouter>
            <HeadNav refs={refs}/>
            <Notification isVisible={notification.isVisible} context={notification.text}/>
            <Routes>
                <Route path="/" element={<Navigate to="/english" replace/>}/>
                <Route path={"/posts"} element={<PostsPage posts={posts}
                                                           addPost={addPost}
                                                           changeBodyInput={changeBodyInput}
                                                           changeTitleInput={changeTitleInput}
                                                           newPostTitle={newPostTitle}
                                                           delPost={delPost}
                                                           newPostBody={newPostBody}/>}/>
                <Route path={"/pokemon"} element={<PokemonPage newPokemon={getPokemon} id={pokemon}/>}/>
                <Route path={"/english"} element={<EnglishPage status={status}
                                                               inputText={inputText}
                                                               changeInputText={changeInputText}
                                                               startGame={startGame}
                                                               buttons={buttons}
                                                               spans={spans}
                                                               changeButton={changeButton}
                                                               clearSentence={clearSentence}
                                                               nextSentence={nextSentence}
                                                               progress={progress}
                                                               goHome={goHome}
                                                               currentIndex={currentIndex}
                                                               changeSentence={changeSentence}/>}/>
                <Route path={"/calculator"} element={<CalculatePage buttons={buttonsCalculate}
                                                                    text={textCalculate}
                                                                    intermediacy={firstSummand + " " + operator}/>}/>
                <Route path={"/todo"} element={<TODOPage list={todoList}
                                                         inputTask={inputTask}
                                                         changeInput={changeInput}
                                                         editingID={editingID}
                                                         editingText={editingText}
                                                         changeTask={changeTask}
                                                         addTask={addTask}
                                                         startEditing={startEditing}
                                                         delTask={delTask}
                                                         saveTask={saveTask}
                />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
