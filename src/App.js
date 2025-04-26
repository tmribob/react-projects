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
import UseCalculatorState from "/Hooks/UseCalculatorState"

const App = () => {
    const {posts, addPost, changeBodyInput, changeTitleInput, newPostTitle, delPost, newPostBody} = UsePostsState();
    const {getPokemon, pokemon} = UsePokemonState;
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
    const {inputCalculate, buttonsCalculate, changeInput} = UseCalculatorState();

    return (
        <BrowserRouter>
            <HeadNav/>
            <Routes>
                <Route path={"/posts"}
                       element={<PostsPage posts={posts} addPost={addPost} changeBodyInput={changeBodyInput}
                                           changeTitleInput={changeTitleInput} newPostTitle={newPostTitle}
                                           delPost={delPost} newPostBody={newPostBody}/>}/>
                <Route path={"/pokemon"} element={<PokemonPage newPokemon={getPokemon} id={pokemon}/>}/>
                <Route path={"/english"}
                       element={<EnglishPage text={textEnglish} inputText={inputText} changeInputText={changeInputText}
                                             splitText={splitText} buttons={buttons} spans={spans} addWord={addWord}
                                             delWord={delWord} clearSentence={clearSentence}
                                             nextSentence={nextSentence}/>}/>
                <Route path={"/calculator"} element={<CalculatePage buttons={buttonsCalculate} changeInput={changeInput}
                                                                    input={inputCalculate}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
