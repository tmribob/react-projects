import "./App.css";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./Pages/PostsPage";
import PokemonPage from "./Pages/PokemonPage";
import EnglishPage from "./Pages/EnglishPage";
import CalculatePage from "./Pages/CalculatePage";
import HeadNav from "./Components/HeadNav/HeadNav";


const App = () => {
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
            alert("ИМЕЕТЬСЯ ПУСТАЯ СТРОКА!!!")
            return;
        }
        const counterID = posts.length > 0 ? posts[posts.length - 1].id : -1
        setPosts([...posts, {title: newPostTitle, body: newPostBody, id: counterID + 1}])
        setPostTitle("")
        setPostBody("")

    }
    const delPost = (idPost) => {
        setPosts(posts.filter(post => post.id !== idPost))
    }

    // Pokemon

    const [pokemon, setPokemon] = useState(1)

    const getPokemon = async () => {
        const id = Math.floor(Math.random() * 904) + 1;
        setPokemon(id)
    };

    // English Game Memory

    const [textEnglish, setTextEnglish] = useState([]);
    const [inputText, setInputText] = useState("");
    const [currentSentence, setCurrentSentence] = useState([]);
    const [buttons, setButtons] = useState([]);
    const [indexSentence, setIndexSentence] = useState(0);
    const [spans, setSpans] = useState([]);

    const splitText = () => {
        const sentences = inputText.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
        const result = sentences.map(sentence => sentence.match(/[а-яА-ЯёЁa-zA-Z0-9]+(?:['`][а-яА-ЯёЁa-zA-Z0-9]+)*/g));
        setButtons(result[indexSentence]);
        setTextEnglish(result);
        setCurrentSentence(result[indexSentence]);

    }

    const changeSentence = () => {
        setCurrentSentence(textEnglish[indexSentence + 1])
        setSpans([])
        setButtons(textEnglish[indexSentence + 1])
        setIndexSentence(indexSentence + 1)
    }
    const addWord = (index) => {
        setSpans([...spans, buttons[index]]);
        setButtons(buttons.filter((_, indexBut) => indexBut !== index))
    }
    const nextSentence = () => {
        if (spans.length === currentSentence.length) {
            for (let i = 0; i < spans.length; i++) {
                if (spans[i] !== currentSentence[i]) {
                    return;
                }
            }
            changeSentence();
        }
    }
    const clearSentence = () => {
        setSpans([])
        setButtons(currentSentence)
    }
    const changeInputText = (value) => {
        setInputText(value.target.value);
    }
    const delWord = (index) => {
        setButtons([...buttons, spans[index]]);
        setSpans(spans.filter((_, indexSpan) => indexSpan !== index))
    }


    useEffect(() => {
        // getPokemon().then();
    }, []);


    return (<>
            <BrowserRouter>
                <HeadNav />
                <Routes>
                    <Route path={"/posts"} element={<PostsPage posts={posts} addPost={addPost}
                                                              changeBodyInput={changeBodyInput}
                                                              changeTitleInput={changeTitleInput}
                                                              newPostTitle={newPostTitle}
                                                              delPost={delPost}
                                                              newPostBody={newPostBody}/>}/>
                    <Route path={"/pokemon"} element={<PokemonPage newPokemon={getPokemon} id={pokemon}/>}/>
                    <Route path={"/english"} element={<EnglishPage text={textEnglish} inputText={inputText}
                                                                  changeInputText={changeInputText}
                                                                  splitText={splitText} buttons={buttons}
                                                                  spans={spans} addWord={addWord}
                                                                  delWord={delWord} clearSentence={clearSentence}
                                                                  nextSentence={nextSentence}/>}/>
                    <Route path={"/calculator"} element={<CalculatePage/>}/>
                </Routes>
            </BrowserRouter>

        </>

    );
};

export default App;
