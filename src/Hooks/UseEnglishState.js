import {useState} from "react";

const UseEnglishState = () => {
    let textEnglish = [];
    let currentSentence = [];
    let indexSentence = 0;
    const [inputText, setInputText] = useState("");
    const [buttons, setButtons] = useState([]);
    const [spans, setSpans] = useState([]);
    const [status,setStatus] = useState('start');

    const splitText = () => {
        const sentences = inputText.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
        const result = sentences.map(sentence => sentence.match(/[а-яА-ЯёЁa-zA-Z0-9]+(?:['`][а-яА-ЯёЁa-zA-Z0-9]+)*/g));
        setButtons(() => (result[indexSentence]));
        textEnglish = result;
        currentSentence = result[indexSentence];
        setStatus('playing');
    }

    const changeSentence = () => {
        currentSentence = textEnglish[indexSentence + 1];
        setSpans([]);
        setButtons(textEnglish[indexSentence + 1]);
        indexSentence++;
    }

    const addWord = (index) => {
        setSpans([...spans, buttons[index]]);
        setButtons(buttons.filter((_, indexBut) => indexBut !== index));
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
        setSpans([]);
        setButtons(currentSentence);
    }

    const changeInputText = (value) => {
        setInputText(value.target.value);
    }

    const delWord = (index) => {
        setButtons([...buttons, spans[index]]);
        setSpans(spans.filter((_, indexSpan) => indexSpan !== index));
    }
    return {
        status,
        inputText,
        changeInputText,
        splitText,
        buttons,
        spans,
        addWord,
        delWord,
        clearSentence,
        nextSentence
    };
}

export default UseEnglishState